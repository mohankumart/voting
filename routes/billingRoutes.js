const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlerwares/requireLogin');

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'inr',
            source: req.body.id,
            description: '5 INR for 5 credits ----> Mohan',
        });

        req.user.credits += 5;
        const user = await req.user.save();
        res.send(user);
    });
};
