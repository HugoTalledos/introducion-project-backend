const express       =   require('express');
const app           =   express();
const routes        =   require('./routes/topic_routes');
const { mongoose }  =   require('./database');

//  Settings
app.set('port', 3000);
app.use(express.json());
app.use('/api/topics', routes);

//Starting server
app.listen(app.get('port'), () => {

});