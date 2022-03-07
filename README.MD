# Tina Template

> My text template cli.

## Installation

```bash
npm i -g tina-template
```

## Usage

```bash
tina [template name] [file path] # command
tina nginx your.conf #example
```

## Nginx

```nginx
server {
        listen 80;
        
        # ========= edit your your domain here =========
        server_name your.domain.com;
        
        location / {
                proxy_set_header X-Forwarded-Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-Server $host;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                
                # ========= edit your app's host here =========
                proxy_pass http://127.0.0.1:80; 
                
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection "upgrade";
        }
}
```
