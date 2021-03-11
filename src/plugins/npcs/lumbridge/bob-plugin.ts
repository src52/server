import { npcInteractionActionHandler } from '@engine/world/action/npc-interaction.action';
import { findShop } from '@engine/config';


const action: npcInteractionActionHandler = ({ player }) =>
    findShop('rs:lumbridge_bobs_axes')?.open(player);

export default {
    type: 'npc_action',
    npcs: 'rs:lumbridge_bob',
    options: 'trade',
    walkTo: true,
    action
};
