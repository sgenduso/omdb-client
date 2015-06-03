aws s3 sync . s3://sam-genduso-omdb-client --acl public-read --exclude ".git/*"
open http://sam-genduso-omdb-client.s3-website-us-west-2.amazonaws.com/
