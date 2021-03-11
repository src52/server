import { equipmentChangeActionHandler } from '@engine/world/action/equipment-change.action';

export const equip: equipmentChangeActionHandler = (details) => {
    const { player } = details;
    player.outgoingPackets.updateClientConfig(491, 1);
};
export const unequip: equipmentChangeActionHandler = (details) => {
    const { player } = details;
    player.outgoingPackets.updateClientConfig(491, 0);
};

export default [{
    type: 'equip_action',
    equipType: 'EQUIP',
    action: equip,
    itemIds: 5527
}, {
    type: 'equip_action',
    equipType: 'UNEQUIP',
    action: unequip,
    itemIds: 5527
}];
