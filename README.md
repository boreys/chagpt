# chagpt
ChaGPT - AI Chatbot for customer service automation

### Run in Production
Build Next.js for production with command:
```
npm build
```
Run the production app:
```
npm start
```

### Setup PM2 process manager
Install pm2 package to run nodejs app in the background
```
sudo npm install -g pm2
```
Navigate to the Next.js application directory (eg: /var/www/chagpt)
```
cd /var/www/chagpt
```
Start the Next.js app using pm2:
```
pm2 start npm --name "chagpt" -- start
```
The command above should start the app already. To ensure it starts on boot, run:
```
pm2 startup
```
Finally, save current process
```
pm2 save
```