function formatTime() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");
    return `${hh}/${mm}/${ss}`;
}

function getStockData(onUpdate) {
    const stock = {
        name: "QtechAI",
        sym: "QTA",
        price: (1 + Math.random() * 3).toFixed(2),
        time: formatTime()
        
    };
    return stock;   
    
}

export { getStockData };
