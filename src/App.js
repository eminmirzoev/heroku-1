import path from 'path';
import express from 'express';

class App {
    constructor() {
        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));
        this._app.get('/lines', this._onGetLines)
    }

    _onGetLines = (req, resp) => {
        
        const lines = [
            {color: 'magenta', thickness: 3 }
        ]
        resp.json(lines);
        resp.end();
    }


    getApp = () => {
        return this._app;
    }
}

export default App;