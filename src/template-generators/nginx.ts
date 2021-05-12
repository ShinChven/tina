import fs from 'fs-extra';
import path from "path";

const defaultConfig = `
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
`;

export default () => {
    const [, , , filepath = 'nginx-template.conf'] = process.argv;
    const file = filepath.indexOf('/') === 0 ? filepath : path.join(process.cwd(), filepath);
    if (fs.existsSync(file)) {
        console.error('file existed, please delete it or back it up first:');
        console.error(file);
    } else {
        fs.outputFileSync(file, defaultConfig);
        console.log('file created:', file);
    }
}



