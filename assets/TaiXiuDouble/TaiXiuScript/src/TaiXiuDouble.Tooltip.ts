// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class TaiXiuMiniToolTip extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;
    
    init(session: number, dices: number[], pos: { x: number }) {
        this.node.active = true;
        this.node.setPosition(pos.x, -50);
        this.label.string = `#${session}\n${dices.join('-')}`;
    }

    disappear() {
        this.node.active = false;
    }
}
