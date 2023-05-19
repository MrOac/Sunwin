const { ccclass, property } = cc._decorator;

const enum SLOT6_ID_ITEM {
  JACKPOT = 3,
  BONUS = 1,
  WILD = 2,
  SCATTER = 0,
  X500 = 4,
  X375 = 5,
  X275 = 6,
  X150 = 7,
  X50 = 8,
  X25 = 9,
  X5 = 10,
}

@ccclass
export default class Slot6Item extends cc.Component {
  @property(sp.Skeleton)
  skeItem: sp.Skeleton = null;
  @property(cc.Sprite)
  sprItem: cc.Sprite = null;

  @property(sp.SkeletonData)
  skeDataSpecical: sp.SkeletonData = null;
  @property(sp.SkeletonData)
  skeDataIcon: sp.SkeletonData = null;
  @property(sp.SkeletonData)
  skeDataIcon2: sp.SkeletonData = null;

  @property(cc.SpriteAtlas)
  sprAtlast: cc.SpriteAtlas = null;

  private mId: number = -1;
  animName = "";

  public getId() {
    return this.mId;
  }

  public setId(pId: number, isWin = false) {
    this.mId = pId;
    this.sprItem.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    switch (this.mId) {
      case SLOT6_ID_ITEM.JACKPOT:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item-jackpot");
        // this.skeItem.skeletonData = this.skeDataSpecical;
        // this.skeItem.animation = isWin ? "jackpot" : "jackpot2";
        // this.animName = isWin ? "jackpot" : "jackpot2";
        break;
      case SLOT6_ID_ITEM.WILD:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-wild");
        // this.skeItem.skeletonData = this.skeDataSpecical;
        // this.skeItem.animation = isWin ? "wild" : "wild2";
        // this.animName = isWin ? "wild" : "wild2";
        break;
      case SLOT6_ID_ITEM.BONUS:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("itembonus");
        // this.skeItem.skeletonData = this.skeDataSpecical;
        // this.skeItem.animation = isWin ? "animation" : "";
        // this.animName = isWin ? "animation" : "";
        break;
      case SLOT6_ID_ITEM.SCATTER:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("itemfree");
        // this.skeItem.skeletonData = this.skeDataSpecical;
        // this.skeItem.animation = "scatter";
        // this.animName = "scatter";
        break;
      case SLOT6_ID_ITEM.X500:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-nao");
        // this.skeItem.skeletonData = this.skeDataIcon;
        // this.skeItem.animation = isWin ? "nhan ma" : "nhan ma2";
        // this.animName = isWin ? "nhan ma" : "nhan ma2";
        break;
      case SLOT6_ID_ITEM.X375:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-tim");
        // this.skeItem.skeletonData = this.skeDataIcon;
        // this.skeItem.animation = isWin ? "su tu" : "su tu2";
        // this.animName = isWin ? "su tu" : "su tu2";
        break;
      case SLOT6_ID_ITEM.X275:
        // this.skeItem.skeletonData = this.skeDataIcon;
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-blue");
        // this.skeItem.animation = isWin ? "bo cap" : "bo cap2";
        // this.animName = isWin ? "bo cap" : "bo cap2";
        break;
      case SLOT6_ID_ITEM.X150:
        // this.skeItem.skeletonData = this.skeDataIcon;
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-thuoc2");
        // this.skeItem.animation = isWin ? "bach duong" : "bach duong2";
        // this.animName = isWin ? "bach duong" : "bach duong2";
        break;
      case SLOT6_ID_ITEM.X50:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-lotron");
        // this.skeItem.skeletonData = this.skeDataIcon2;
        // this.skeItem.animation = "tui tien";
        // this.animName = "tui tien";
        break;
      case SLOT6_ID_ITEM.X25:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item-ongnghirm");
        // this.skeItem.skeletonData = this.skeDataIcon2;
        // this.skeItem.animation = "vong co";
        // this.animName = "vong co";
        break;
      case SLOT6_ID_ITEM.X5:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item22221111");
        // this.skeItem.skeletonData = this.skeDataIcon2;
        // this.skeItem.animation = "ngon nen";
        // this.animName = "ngon nen";
        break;
    }
    this.sprItem.node.setContentSize(
      cc.size(this.sprItem.node.width / 1.55, this.sprItem.node.height / 1.55)
    );
  }
  showItemAnim() {
    this.skeItem.node.color = cc.Color.WHITE;
    this.skeItem.node.active = true;
    this.sprItem.node.active = false;
    this.skeItem.setAnimation(0, this.animName, true);
  }
  setIdBlur(id) {
    this.sprItem.sizeMode = cc.Sprite.SizeMode.TRIMMED;
    switch (this.mId) {
      case SLOT6_ID_ITEM.JACKPOT:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item-jackpot");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.WILD:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-wild");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.BONUS:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("itembonus");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.SCATTER:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("itemfree");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X500:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-nao");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X375:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-tim");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X275:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-blue");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X150:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-thuoc2");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X50:
        this.sprItem.spriteFrame = this.sprAtlast.getSpriteFrame("item-lotron");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X25:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item-ongnghirm");
        // this.node.opacity = 50;
        break;
      case SLOT6_ID_ITEM.X5:
        this.sprItem.spriteFrame =
          this.sprAtlast.getSpriteFrame("item22221111");
        // this.node.opacity = 50;
        break;
    }
    this.sprItem.node.setContentSize(
      cc.size(this.sprItem.node.width / 1.45, this.sprItem.node.height / 1.45)
    );
  }
  offItemAnim() {
    this.sprItem.node.active = true;
    this.skeItem.node.active = false;
  }
}
