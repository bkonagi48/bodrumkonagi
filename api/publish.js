// Vercel Serverless Function to safely publish changes to GitHub
module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, data } = req.body;

  if (password !== 'bodrum48') {
    return res.status(401).json({ error: 'Hatalı şifre / Unauthorized' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'GitHub Token Vercel üzerinde tanımlanmamış. / GitHub Token not configured on Vercel.' });
  }

  const repo = 'bkonagi48/bodrumkonagi';
  const filePath = 'js/data.js';
  const url = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  
  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'Vercel-Serverless-Function'
  };

  try {
    // 1. Fetch current file to retrieve latest SHA
    const getRes = await fetch(url, { headers });
    if (!getRes.ok) {
      throw new Error(`GitHub metadata fetch failed: ${getRes.statusText}`);
    }
    const fileData = await getRes.json();
    const sha = fileData.sha;

    // 2. Generate updated content string
    const jsContent = `/* ============================================================================\n` +
      `   BODRUM KONAĞI — CONTENT DATA\n` +
      `   Generated automatically by Admin Panel.\n` +
      `   ========================================================================== */\n\n` +
      `window.SITE_DATA = ${JSON.stringify(data, null, 2)};\n`;

    const base64Content = Buffer.from(jsContent, 'utf-8').toString('base64');

    // 3. Push commit to GitHub
    const putRes = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: 'chore: update rooms data via admin dashboard',
        content: base64Content,
        sha
      })
    });

    if (!putRes.ok) {
      throw new Error(`GitHub commit failed: ${putRes.statusText}`);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
