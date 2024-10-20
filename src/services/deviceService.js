import Device from '../models/deviceDao.js';

export const getAllDevicesQuery = async () => {
    try {
        const devices = await Device.find();  
        return devices;
    } catch (error) {
        console.error('Error fetching devices:', error);
        throw new Error('Could not fetch devices');
    }
};

export const getDeviceByIdQuery = async (id) => {
    try {
        const device = await Device.findById(id); 
        return device;
    } catch (error) {
        console.error(`Error fetching device with id ${id}:`, error);
        throw new Error('Could not fetch device');
    }
};

export const deleteDeviceByIdCommand = async (id) => {
    try {
        const device = await Device.findByIdAndDelete(id); 
        return device;
    } catch (error) {
        console.error(`Error deleting device with id ${id}:`, error);
        throw new Error('Could not delete device');
    }
};

export const editDeviceByIdCommand = async (id, deviceDto) => {
    try {
        const device = await Device.findByIdAndUpdate(id, deviceDto, { new: true });
        return device;
    } catch (error) {
        console.error(`Error updating device with id ${id}:`, error);
        throw new Error('Could not update device');
    }
};

export const createDeviceCommand = async (deviceDto) => {
    try {
        const device = new Device(deviceDto); 
        await device.save();
        return device;
    } catch (error) {
        console.error('Error creating device:', error);
        throw new Error('Could not create device');
    }
};
