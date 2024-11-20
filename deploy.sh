# Build Angular app for production with the correct base-href
ng build --base-href="./"

# Step 2: Duplicate index.html as 404.html in the specified directory
cp dist/brad-burzon/browser/index.html dist/brad-burzon/browser/404.html

# Step 3: Ensure the CNAME file is created or updated in the specified directory
echo 'bradburzon.com' > dist/brad-burzon/browser/CNAME

# Step 4: Use angular-cli-ghpages to deploy, specifying the correct directory
ngh --dir=dist/brad-burzon/browser

npx angular-cli-ghpages --dir=dist/brad-burzon/browser/