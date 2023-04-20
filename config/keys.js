//add this file to .gitignore

module.exports={
    google:{
        clientID:'408601177776-ct1qiai2nsct3uv6dnphllattar10kbr.apps.googleusercontent.com',
        clientSecret:'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',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    mongodb:{
        dbURI:'mongodb://localhost:27017/blogverse'
    },
    session:{
        cookieKey:'theblogzisawesome',
        cookieSecret:'blogit'
    }
}    