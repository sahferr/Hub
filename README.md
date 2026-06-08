# Sara — Profile

## 📁 Estrutura

```
sara-site/
├── index.html       
├── Dockerfile       
├── nginx.conf       
├── fly.toml         
└── README.md
```

---

## 🚀 Deploy no Fly.io

### 1. Instalar o flyctl
```bash
curl -L https://fly.io/install.sh | sh
```

### 2. Login
```bash
fly auth login
```

### 3. Criar o app (primeira vez)
```bash
fly launch --name sara-site --region gru --no-deploy
```
> Quando perguntar se quer usar o `fly.toml` existente, diga **sim**.

### 4. Deploy
```bash
fly deploy
```

Seu site vai estar em: `https://sara-site.fly.dev`

---

## 🐙 GitHub Pages

### 1. Criar repositório no GitHub
```bash
git init
git add .
git commit -m "feat: site inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/sara-site.git
git push -u origin main
```

### 2. Ativar GitHub Pages
- Vá em **Settings → Pages**
- Source: **Deploy from a branch**
- Branch: `main` / `/ (root)`
- Salvar

Seu site vai estar em: `https://SEU_USUARIO.github.io/sara-site`

---

## ✏️ Como personalizar

Abra o `index.html` e edite:

| O que | Onde no HTML |
|---|---|
| Seu nome | `<title>` e `<a class="nav-logo">` |
| Apresentação (hero) | `<h1>` e `.hero-sub` |
| Sobre você | seção `#sobre` |
| Habilidades | `.skills-list` → `<span class="skill-tag">` |
| Produtos | seção `#produtos` → `.product-card` |
| Email de contato | `href="mailto:..."` |
| Links (GitHub, LinkedIn) | `href="https://..."` |

---

## 🌐 Região Fly.io
O `fly.toml` está configurado para `gru` (São Paulo). Mantém a latência baixa para usuários brasileiros.
