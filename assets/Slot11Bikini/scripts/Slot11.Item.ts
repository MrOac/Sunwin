const { ccclass, property } = cc._decorator;
@ccclass
export default class Slot11ItemSlot extends cc.Component {

    @property(cc.Sprite)
    spriteIcon: cc.Sprite = null;

    @property(sp.Skeleton)
    spineIcon: sp.Skeleton = null;

    @property(cc.SpriteAtlas)
    itemAtlast: cc.SpriteAtlas = null;

    public itemId = null;
    public index = null;
    public animName = null;
    start() {
    }
    init(itemId, index) {
        this.spriteIcon = this.node.getComponentInChildren(cc.Sprite);
        this.spineIcon = this.node.getComponentInChildren(sp.Skeleton);
        var self = this;
        self.itemId = itemId;
        self.spriteIcon.node.active = true;
        // this.spineIcon.node.scale = 0.67;
        this.changeSpineIcon(itemId);
        // self.spineIcon.node.active = false;
        // this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        // this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        //this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 0.2, this.spriteIcon.node.height / 0.2));
        if (index > 2) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = false;
        }
    }



    changeSpriteBlurByItemId(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spineIcon.node.active = false;
        this.spriteIcon.node.active = true;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        self.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId + "_blur");
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width, this.spriteIcon.node.height * 0.4));
    }

    changeSpriteRealByItemId(itemId) {
        var self = this;
        this.itemId = itemId;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        this.spineIcon.node.active = false;
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
    }

    changeSpineIcon(itemId) {
        var self = this;
        self.itemId = itemId;
        this.spriteIcon.node.y = 0;
        this.spriteIcon.sizeMode = cc.Sprite.SizeMode.TRIMMED;
        this.spriteIcon.spriteFrame = this.itemAtlast.getSpriteFrame("item_" + itemId);
        this.spriteIcon.node.setContentSize(cc.size(this.spriteIcon.node.width / 1, this.spriteIcon.node.height / 1));
        if (itemId > 3) {
            this.spineIcon.node.active = false;
        } else {
            itemId = parseInt(itemId);
            switch (itemId) {
                case 0:
                    this.animName = "Free";
                    this.spineIcon.node.setPosition(cc.v2(-8.7, -4.6));
                    break;
                case 1:
                    this.animName = "bonus";
                    this.spineIcon.node.setPosition(cc.v2(1.6, 8.7));
                    break;
                case 2:
                    this.animName = "wildmonkey";
                    this.spineIcon.node.setPosition(cc.v2(-0.45, 4.5));
                    break;
                case 3:
                    this.animName = "Jackpot";
                    this.spineIcon.node.setPosition(cc.v2(-9.711, 24));
                    break;
            }

            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
        }
    }
    checkShowSpriteOrSpine() {
        cc.Tween.stopAllByTarget(this.spriteIcon.node);
        cc.Tween.stopAllByTarget(this.spineIcon.node);
        if (this.itemId > 0) {
            this.spineIcon.node.active = false;
            this.spriteIcon.node.active = true;
            this.spriteIcon.node.color = cc.Color.WHITE;
            cc.tween(this.spriteIcon.node)
                .repeatForever(
                    cc.tween().sequence(
                        cc.tween().to(0.5, { scale: this.spriteIcon.node.scale + 2 }, { easing: cc.easing.sineOut }),
                        cc.tween().to(0.5, { scale: this.spriteIcon.node.scale }, { easing: cc.easing.sineOut })))
                .start();
            cc.tween(this.spriteIcon.node)
                .delay(0.1)
                .call(() => {
                    this.spriteIcon.node.color = cc.Color.GRAY;
                    cc.Tween.stopAllByTarget(this.spriteIcon.node);
                    this.spriteIcon.node.scale = 1.0;
                }).start();
        } else {
            this.spineIcon.node.active = true;
            this.spriteIcon.node.active = false;
            this.spineIcon.setAnimation(0, this.animName, true);
            this.spineIcon.node.color = cc.Color.WHITE;

            cc.tween(this.spineIcon.node)
                .delay(0.1).call(() => {
                    this.spineIcon.node.color = cc.Color.GRAY;
                    this.spriteIcon.node.active = true;
                    this.spineIcon.node.active = false;
                }).start();
        }
    }
}