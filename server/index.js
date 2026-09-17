import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Ensure data directory exists
const dataDir = path.join(__dirname, 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const leadsFile = path.join(dataDir, 'leads.json');
if (!fs.existsSync(leadsFile)) {
  fs.writeFileSync(leadsFile, JSON.stringify([], null, 2));
}

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', brand: 'Ctrl P', time: new Date().toISOString() });
});

// Quote submission & lead capture
app.post('/api/quote', (req, res) => {
  try {
    const { name, phone, email, service, quantity, size, requirements } = req.body;
    
    if (!name || !phone || !service) {
      return res.status(400).json({ error: 'Name, phone, and service are required' });
    }

    const newLead = {
      id: 'QUOTE-' + Date.now(),
      name,
      phone,
      email: email || '',
      service,
      quantity: quantity || 'Standard',
      size: size || 'Standard',
      requirements: requirements || '',
      createdAt: new Date().toISOString()
    };

    const currentLeads = JSON.parse(fs.readFileSync(leadsFile, 'utf8') || '[]');
    currentLeads.push(newLead);
    fs.writeFileSync(leadsFile, JSON.stringify(currentLeads, null, 2));

    // Construct WhatsApp pre-filled text
    const waText = encodeURIComponent(
      `Hello Ctrl P!\nI would like a quote for:\n• *Service:* ${service}\n• *Quantity:* ${quantity || 'Not specified'}\n• *Size:* ${size || 'Standard'}\n• *Name:* ${name}\n• *Phone:* ${phone}\n${requirements ? '• *Notes:* ' + requirements : ''}`
    );
    const whatsappUrl = `https://wa.me/919304085366?text=${waText}`;

    res.status(201).json({
      success: true,
      message: 'Quote request registered successfully',
      leadId: newLead.id,
      whatsappUrl
    });
  } catch (error) {
    console.error('Quote error:', error);
    res.status(500).json({ error: 'Failed to process quote request' });
  }
});

// Contact message endpoint
app.post('/api/contact', (req, res) => {
  try {
    const { name, phone, message } = req.body;
    const contactFile = path.join(dataDir, 'contacts.json');
    const current = fs.existsSync(contactFile) ? JSON.parse(fs.readFileSync(contactFile, 'utf8') || '[]') : [];
    
    const entry = {
      id: 'MSG-' + Date.now(),
      name,
      phone,
      message,
      createdAt: new Date().toISOString()
    };
    current.push(entry);
    fs.writeFileSync(contactFile, JSON.stringify(current, null, 2));

    res.status(201).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to record message' });
  }
});

// Root API info
app.get('/api', (req, res) => {
  res.json({
    brand: 'Ctrl P — Printing • Advertising • Event',
    location: 'Kalyani Complex, Bari Path, Langar Toli Chauraha, Patna, Bihar',
    phone: '9304085366',
    endpoints: ['/api/health', '/api/quote', '/api/contact']
  });
});

app.listen(PORT, () => {
  console.log(`Ctrl P backend server running on http://localhost:${PORT}`);
});
