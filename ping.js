export default class ping {
    static sendPing(req, res) {
        let response = {
            success: true,
        };
        res.status(200).json(response);
    }
}
