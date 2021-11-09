import resources from '@/script/resources.js';

const icon = {
    [resources.STONES]: "images/icon_mining.png",
    [resources.PLANTS]: "images/icon_gathering.png",
    [resources.HERBS]: "images/icon_farming.jpg"
}

export default {
    getIcon(activityType) {
        return icon[activityType];
    }
}