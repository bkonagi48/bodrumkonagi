// Vercel Serverless Function to safely upload files to GitHub
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

  const { password, base64Data, fileName } = req.body;

  if (password !== 'bodrum48') {
    return res.status(401).json({ error: 'Hatalı şifre / Unauthorized' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'GitHub Token Vercel üzerinde tanımlanmamış. / GitHub Token not configured on Vercel.' });
  }

  const repo = 'bkonagi48/bodrumkonagi';
  const url = `https://api.github.com/repos/${repo}/contents/assets/images/uploads/${fileName}`;

  const headers = {
    'Authorization': `token ${token}`,
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'Vercel-Serverless-Function'
  };

  try {
    const putRes = await fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify({
        message: 'media: upload room image via admin dashboard',
        content: base64Data
      })
    });

    if (!putRes.ok) {
      throw new Error(`GitHub upload failed: ${putRes.statusText}`);
    }

    return res.status(200).json({ success: true, path: `assets/images/uploads/${fileName}` });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
