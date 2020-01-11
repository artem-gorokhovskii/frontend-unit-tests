const getMaskedPhone = (phone) => {
    if (typeof phone !== 'number' || String(phone).length !== 11) {
        return null;
    }

    return Array(7).fill('*').join('') + String(phone).slice(-4);
};

module.exports = { getMaskedPhone };
