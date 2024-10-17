import * as deviceService from '../services/deviceService.js';

export const getAllDevices = async (req, res) => {
    try {
        const devices = await deviceService.getAllDevices();
        res.json(devices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getDeviceById = async (req, res) => {
    try {
        const { id } = req.params;
        const device = await deviceService.getDeviceById(id);

        if (!device) {
            return res.status(404).json({ message: 'Device not found' });
        }

        res.json(device);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteDeviceById = async (req, res) => {
    try {
        const { id } = req.params;

        await deviceService.deleteDeviceById(id);
        res.status(204).end();

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editDeviceById = async (req, res) => {
    // Finish this method
};

export default {
    getAllDevices,
    getDeviceById,
    deleteDeviceById,
    editDeviceById
};