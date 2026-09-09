# Concórdia Eletric — Projeto do Site

Projeto preparado para versionamento e publicação no GitHub.

## Estrutura

- `index.html` — site público
- `assets/css/style.css` — estilos públicos
- `assets/js/app.js` — JavaScript público
- `admin/index.html` — estrutura do painel administrativo
- `admin/admin.css` — estilos do painel
- `admin/admin.js` — JavaScript do painel
- `orcamento/` — área reservada para o sistema de orçamento/PDF
- `backup-site-original.html` — cópia de segurança da versão original
- `.github/workflows/deploy-pages.yml` — publicação automática no GitHub Pages
- `.env.example` — modelo de variáveis locais; não contém segredos

## GitHub

Repositório sugerido: `concordia-eletric`.

Branch principal: `main`.

Após criar o repositório no GitHub, conecte o repositório local com:

```bash
git remote add origin URL_DO_SEU_REPOSITORIO
 git push -u origin main
```

> Não coloque senha, service role key ou outras credenciais secretas no código.

## GitHub Pages

O workflow em `.github/workflows/deploy-pages.yml` está preparado para publicar o conteúdo da branch `main` no GitHub Pages.

A autenticação e a proteção real do painel administrativo serão implementadas nas fases de Supabase/Auth. O fato de o projeto estar hospedado no GitHub Pages não substitui as regras de segurança do banco.

## Estado do projeto

- Fase 1 — concluída: análise do site atual.
- Fase 2 — concluída: organização da estrutura do projeto.
- Fase 3 — concluída: preparação para GitHub e GitHub Pages.
- Fase 4 — próxima: configuração do Supabase.
