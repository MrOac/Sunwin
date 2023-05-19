import BundleControl from "../../../Loading/src/BundleControl";
import Configs from "../../../Loading/src/Configs";
import App from "../../../Lobby/LobbyScript/Script/common/App";
import BroadcastReceiver from "../../../Lobby/LobbyScript/Script/common/BroadcastReceiver";
import LanguageLanguageManager from "../../../Lobby/LobbyScript/Script/common/Language.LanguageManager";
import ScrollViewControl from "../../../Lobby/LobbyScript/Script/common/ScrollViewControl";
import SPUtils from "../../../Lobby/LobbyScript/Script/common/SPUtils";
import Tween from "../../../Lobby/LobbyScript/Script/common/Tween";
import Utils from "../../../Lobby/LobbyScript/Script/common/Utils";
import MiniGameNetworkClient from "../../../Lobby/LobbyScript/Script/networks/MiniGameNetworkClient";
import InPacket from "../../../Lobby/LobbyScript/Script/networks/Network.InPacket";
import Res from "../../../Lobby/LobbyScript/TienLenScript/TienLen.Res";
import TaiXiuDoubleController from "../src/TaiXiuDouble.Controller";
import TaiXiuMiniToolTip from "../src/TaiXiuDouble.Tooltip";
import cmd from "./TaiXiuMini.Cmd";
import PanelChat from "./TaiXiuMini.PanelChat";
import PopupDetailHistory from "./TaiXiuMini.PopupDetailHistory";
import TaiXiuMiniPopupHistory from "./TaiXiuMini.PopupHistory";
import TaiXiuMiniPopupHonors from "./TaiXiuMini.PopupHonors";

const { ccclass, property } = cc._decorator;

enum BetDoor {
  None,
  Tai,
  Xiu,
}
enum audio_clip {
  WIN = 0,
  DICE = 1,
  CLOCK = 2,
}
@ccclass("TaiXiuMini.TaiXiuMiniController.SoundManager")
export class SoundManager {
  @property(cc.Node)
  nodeSelf: cc.Node = null;
  @property(cc.Node)
  taixiuView: cc.Node = null;

  @property(cc.AudioSource)
  effSound: cc.AudioSource = null;

  @property([cc.AudioClip])
  listAudio: cc.AudioClip[] = [];
  playAudioEffect(indexAudio) {
    if (this.taixiuView.active && SPUtils.getSoundVolumn() > 0) {
      this.effSound.clip = this.listAudio[indexAudio];
      this.effSound.play();
    }
  }
}
@ccclass
export default class TaiXiuMiniController extends cc.Component {
  static instance: TaiXiuMiniController = null;
  @property(cc.Node)
  scrollChat: cc.Node = null;
  @property(cc.Node)
  chatNhanh: cc.Node = null;
  @property(cc.Node)
  contentChatNhanh: cc.Node = null;
  @property(sp.Skeleton)
  bgSpine: sp.Skeleton = null;
  @property(cc.Node)
  gamePlay: cc.Node = null;
  @property(cc.Node)
  eftai: cc.Node = null;
  @property(cc.Node)
  efxiu: cc.Node = null;


  @property([cc.SpriteFrame])
  sprDices1: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  @property([cc.SpriteFrame])
  sprDices2: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  @property([cc.SpriteFrame])
  sprDices3: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  @property(cc.Node)
  dices: cc.Node = null;
  @property(cc.Animation)
  diceEffect: cc.Animation = null;

  sprDices: Array<cc.SpriteFrame> = new Array<cc.SpriteFrame>();
  @property(cc.SpriteFrame)
  sprFrameTai: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  sprFrameXiu: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  sprFrameBtnNan: cc.SpriteFrame = null;
  @property(cc.SpriteFrame)
  sprFrameBtnNan2: cc.SpriteFrame = null;
  @property(cc.Label)
  lblSession: cc.Label = null;
  @property(cc.Label)
  lblRemainTime: cc.Label = null;
  @property(cc.Label)
  lblRemainTime2: cc.Label = null;
  @property(cc.Label)
  lblScore: cc.Label = null;
  @property(cc.Label)
  lblUserTai: cc.Label = null;
  @property(cc.Label)
  lblUserXiu: cc.Label = null;
  @property(cc.Label)
  lblTotalBetTai: cc.Label = null;
  @property(cc.Label)
  lblTotalBetXiu: cc.Label = null;
  @property(cc.Label)
  lblBetTai: cc.Label = null;
  @property(cc.Label)
  lblBetXiu: cc.Label = null;
  @property(cc.Label)
  lblBetedTai: cc.Label = null;
  @property(cc.Label)
  lblBetedXiu: cc.Label = null;
  // @property(sp.Skeleton)
  // dice1: sp.Skeleton = null;
  // @property(sp.Skeleton)
  // dice2: sp.Skeleton = null;
  // @property(sp.Skeleton)
  // dice3: sp.Skeleton = null;

  @property(cc.Node)
  bowl: cc.Node = null;
  @property(cc.Node)
  tai: cc.Node = null;
  @property(cc.Node)
  xiu: cc.Node = null;
  @property(cc.Node)
  btnHistories: cc.Node = null;
  @property(cc.Node)
  nodePanelChat: cc.Node = null;
  @property(cc.Node)
  layoutBet: cc.Node = null;
  @property(cc.Node)
  layoutBet1: cc.Node = null;
  @property([cc.Button])
  buttonsBet1: Array<cc.Button> = new Array<cc.Button>();
  @property(cc.Label)
  lblToast: cc.Label = null;
  @property(cc.Label)
  lblWinCash: cc.Label = null;
  @property(cc.Node)
  btnNan: cc.Node = null;
  @property(cc.Node)
  popupContainer: cc.Node = null;
  @property(sp.Skeleton)
  animJP: sp.Skeleton = null;
  @property(cc.Label)
  lbJackPot: cc.Label = null;

  @property(cc.Label)
  lbJackPotTai: cc.Label = null;

  @property(cc.Label)
  lbJackPotXiu: cc.Label = null;

  @property([cc.BitmapFont])
  fontTime: cc.BitmapFont[] = [];

  @property(SoundManager)
  soundManager: SoundManager = null;

  @property([cc.Node])
  public popups: cc.Node[] = [];

  @property([cc.Prefab])
  public popupsPr: cc.Prefab[] = [];

  @property(cc.Node)
  public parentOfHistoryBarAndTooltip: cc.Node = null;

  @property(TaiXiuMiniToolTip)
  public tooltip: TaiXiuMiniToolTip = null;

  private isBetting = false;
  private remainTime = 0;
  private canBet = true;
  private betedTai = 0;
  private betedXiu = 0;
  private referenceId = 0;
  private betingValue = -1;
  private betingDoor = BetDoor.None;
  private isOpenBowl = false;
  private lastWinCash = 0;
  private lastScore = 0;
  private isNan = false;
  histories = [];
  private isCanChat = true;
  private panelChat: PanelChat = null;
  private readonly maxBetValue = 999999999;
  private listBets = [
    100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 10000000,
  ];
  private readonly bowlStartPos = cc.v2(-252, -12);
  private currentBtnBet = null;
  private arrTimeoutDice = [];
  private popupHonor: TaiXiuMiniPopupHonors = null;
  private popupHistory: TaiXiuMiniPopupHistory = null;
  private popupGuide = null;
  private popupSoiCau = null;
  private popupDetailSession = null;
  private sessionId = 0;
  private jackpotData = null;
  private resultData = null;
  onLoad() {
    TaiXiuMiniController.instance = this;
    this.layoutBet.y = 28;

    var self = this;
    for (var i = 0; i < this.contentChatNhanh.childrenCount; i++) {
      let node = this.contentChatNhanh.children[i];
      node.on("click", function () {
        self.sendChat(node.children[0].getComponent(cc.Label).string);
        self.scrollChat.active = true;
        self.chatNhanh.active = false;
      });
    }
  }

  toggleChatNhanh() {
    if (this.chatNhanh.active == false) {
      this.chatNhanh.active = true;
      this.scrollChat.active = false;
    } else {
      this.chatNhanh.active = false;
      this.scrollChat.active = true;
    }
  }

  onDisable() {
    for (var i = 0; i < this.arrTimeoutDice.length; i++) {
      clearTimeout(this.arrTimeoutDice[i]);
    }
    this.arrTimeoutDice = [];
  }

  getAnimationDiceStart(dice) {
    var anim = "";
    if (dice == 1) anim = "#1 WHITE_F1";
    else if (dice == 2) anim = "#1 WHITE_F2";
    else if (dice == 3) anim = "#1 WHITE_F3";
    else if (dice == 4) anim = "#1 WHITE_F4";
    else if (dice == 5) anim = "#1 WHITE_F5";
    else if (dice == 6) anim = "#1 WHITE_F6";
    return anim;
  }

  getAnimationDiceEnd(dice) {
    var anim = "";
    if (dice == 1) anim = "#1 END_F1";
    else if (dice == 2) anim = "#1 END_F2";
    else if (dice == 3) anim = "#1 END_F3";
    else if (dice == 4) anim = "#1 END_F4";
    else if (dice == 5) anim = "#1 END_F5";
    else if (dice == 6) anim = "#1 END_F6";
    return anim;
  }
  onFocusInEditor() {
    cc.log("------------------");
  }

  setupTimeRunInBg() {
    cc.game.on(cc.game.EVENT_SHOW, () => {
      if (this.node.active) {
        if (this.arrTimeoutDice == null) this.arrTimeoutDice = [];
        for (var i = 0; i < this.arrTimeoutDice.length; i++) {
          clearTimeout(this.arrTimeoutDice[i]);
        }
        let parent = this.lblToast.node.parent;
        parent.stopAllActions();
        parent.active = false;
        parent.opacity = 0;
        this.arrTimeoutDice = [];
      }
    });
  }

  start() {
    this.setupTimeRunInBg();
    MiniGameNetworkClient.getInstance().addListener((data: Uint8Array) => {
      if (!this.node.active) return;
      let inpacket = new InPacket(data);
      switch (inpacket.getCmdId()) {
        case cmd.Code.GAME_INFO: {
          let res = new cmd.ReceiveGameInfo(data);
          this.stopWin();
          this.bowl.active = false;
          if (res.bettingState) {
            this.isBetting = true;
            this.dices.active = false;
            this.diceEffect.node.active = false;
            // this.dice1.node.active = false;
            // this.dice2.node.active = false;
            // this.dice3.node.active = false;
            this.lblRemainTime.node.active = true;
            this.lblRemainTime.string =
              res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
            this.lblRemainTime.font =
              res.remainTime < 10 ? this.fontTime[1] : this.fontTime[0];
            this.lblRemainTime2.node.parent.active = false;
            this.lblRemainTime2.node.active = false;
            this.lblScore.node.parent.active = false;
            this.lblScore.node.active = false;
          } else {
            this.lastScore = res.dice1 + res.dice2 + res.dice3;
            this.isBetting = false;

            this.dices.active = false;
            this.diceEffect.node.active = false;
            let dicesValue = [res.dice1, res.dice2, res.dice3];
            this.dices.children[0].getComponent(cc.Sprite).spriteFrame = this.sprDices1[dicesValue[0]];
            this.dices.children[1].getComponent(cc.Sprite).spriteFrame = this.sprDices2[dicesValue[1]];
            this.dices.children[2].getComponent(cc.Sprite).spriteFrame = this.sprDices3[dicesValue[2]];

            // this.dice1.node.active = true;
            // this.dice1.setAnimation(
            //   0,
            //   this.getAnimationDiceEnd(res.dice1),
            //   false
            // );
            // this.dice2.node.active = true;
            // this.dice2.setAnimation(
            //   0,
            //   this.getAnimationDiceEnd(res.dice2),
            //   false
            // );
            // this.dice3.node.active = true;
            // this.dice3.setAnimation(
            //   0,
            //   this.getAnimationDiceEnd(res.dice3),
            //   false
            // );

            this.lblRemainTime.node.active = false;
            this.lblRemainTime2.node.parent.active = true;
            this.lblRemainTime2.node.active = true;
            this.lblRemainTime2.string =
              "" +
              (res.remainTime < 10
                ? "0" + res.remainTime
                : "" + res.remainTime);
            this.showResult();
          }
          if (!res.bettingState) {
            if (res.remainTime == 17) {
              this.showToast(App.instance.getTextLang("txt_taixiu_refund"));
            }
            let chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
            this.lblTotalBetTai.string = Utils.formatNumber(chipEnd);
            this.lblTotalBetXiu.string = Utils.formatNumber(chipEnd);
          } else {
            Tween.numberTo(this.lblTotalBetTai, res.potTai, 0.3);
            Tween.numberTo(this.lblTotalBetXiu, res.potXiu, 0.3);
          }
          Tween.numberTo(this.lbJackPotTai, res.jpTai, 1.0);
          Tween.numberTo(this.lbJackPotXiu, res.jpXiu, 1.0);
          this.betedTai = res.betTai;
          this.lblBetedTai.string = Utils.formatNumber(this.betedTai);
          this.betedXiu = res.betXiu;
          this.lblBetedXiu.string = Utils.formatNumber(this.betedXiu);
          this.referenceId = res.referenceId;
          this.lblSession.string = "#" + res.referenceId;
          this.sessionId = res.referenceId;
          this.remainTime = res.remainTime;
          break;
        }
        case cmd.Code.UPDATE_TIME: {
          let res = new cmd.ReceiveUpdateTime(data);
          if (res.bettingState) {
            if (res.remainTime == 50) {
              this.showToast(
                App.instance.getTextLang("txt_taixiu_new_session")
              );
            }

            this.isBetting = true;
            this.lblRemainTime.node.active = true;
            this.lblRemainTime.string =
              res.remainTime < 10 ? "0" + res.remainTime : "" + res.remainTime;
            this.lblRemainTime.font =
              res.remainTime < 10 ? this.fontTime[1] : this.fontTime[0];
            this.lblRemainTime2.node.parent.active = false;
            this.lblRemainTime2.node.active = false;
            this.lblScore.node.parent.active = false;
            this.lblScore.node.active = false;

            // if (res.remainTime < 6) {
            //     this.soundManager.playAudioEffect(audio_clip.CLOCK);
            // }

          this.diceEffect.node.active = false;
          this.dices.active = false;
          this.stopWin();
          } else {
          //   if (res.remainTime == 5) {
          //     this.showToast("Trả Tiền Thưởng !");
          // }

            if (res.remainTime > 15) {
              res.remainTime -= 15;
            } else {
              res.remainTime = 0;
            }
            this.isBetting = false;
            this.lblRemainTime.node.active = false;
            this.lblRemainTime2.node.parent.active = true;
            this.lblRemainTime2.node.active=true;
            this.lblRemainTime2.string =
              "" +
              (res.remainTime < 10
                ? "0" + res.remainTime
                : "" + res.remainTime);
            this.layoutBet.active = false;
            this.layoutBet.y = 28;
            this.lblBetTai.string = App.instance.getTextLang("");
            this.lblBetXiu.string =
              App.instance.getTextLang("");

            if (res.remainTime < 5 && this.isNan && !this.isOpenBowl) {
              this.bowl.active = false;
              this.showResult();
              this.showWinCash();
              this.isOpenBowl = true;
            }
          }
          if (!res.bettingState) {
            if (res.remainTime == 17) {
              this.showToast(App.instance.getTextLang("txt_taixiu_refund"));
            }
            let chipEnd = res.potTai > res.potXiu ? res.potXiu : res.potTai;
            this.lblTotalBetTai.string = Utils.formatNumber(chipEnd);
            this.lblTotalBetXiu.string = Utils.formatNumber(chipEnd);
          } else {
            Tween.numberTo(this.lblTotalBetTai, res.potTai, 0.3);
            Tween.numberTo(this.lblTotalBetXiu, res.potXiu, 0.3);
          }
          this.lblUserTai.string = +Utils.formatNumber(res.numBetTai) + "";
          this.lblUserXiu.string = +Utils.formatNumber(res.numBetXiu) + "";
          break;
        }
        case cmd.Code.DICES_RESULT: {
          this.lblRemainTime.node.active = true;
          this.lblRemainTime2.node.parent.active = false;

          let res = new cmd.ReceiveDicesResult(data);
                    this.lastScore = res.dice1 + res.dice2 + res.dice3;
                    this.lblRemainTime.node.active = false;

                    this.dices.active = false;
                    let dicesValue = [res.dice1, res.dice2, res.dice3];
                    this.dices.children[0].getComponent(cc.Sprite).spriteFrame = this.sprDices1[dicesValue[0]];
                    this.dices.children[1].getComponent(cc.Sprite).spriteFrame = this.sprDices2[dicesValue[1]];
                    this.dices.children[2].getComponent(cc.Sprite).spriteFrame = this.sprDices3[dicesValue[2]];

                    this.diceEffect.node.active = true;
                    this.diceEffect.play();
                    this.soundManager.playAudioEffect(audio_clip.DICE);
                    if (!this.isNan) {

                    } else {
                        this.scheduleOnce(() => {
                            this.bowl.x = this.bowlStartPos.x;
                            this.bowl.y = this.bowlStartPos.y;
                            this.bowl.active = true;
                            this.dices.active = true;
                        }, 2);
                    }

                    this.scheduleOnce(() => {
                        this.diceEffect.node.active = false;
                        if (!this.isNan) {
                            this.showResult();
                                          if (this.jackpotData != null) {
                    this.handleJackpotWin(this.jackpotData);
                  }
                        }
                    }, 2);

                    if (this.histories.length >= 100) {
                        this.histories.slice(0, 1);
                    }
                    this.histories.push({
                        "session": this.referenceId,
                        "dices": [
                            res.dice1,
                            res.dice2,
                            res.dice3
                        ]
                    });

          // this.arrTimeoutDice.push(
          //   setTimeout(() => {
          //     var self = this;
          //     let res = new cmd.ReceiveDicesResult(data);
          //     this.lastScore = res.dice1 + res.dice2 + res.dice3;
          //     this.lblRemainTime.node.active = false;

          //     this.arrTimeoutDice.push(
          //       setTimeout(function () {
          //         self.dice1.node.active = true;
          //         self.dice1.setAnimation(
          //           0,
          //           self.getAnimationDiceStart(res.dice1),
          //           false
          //         );
          //       }, Math.random() * 0)
          //     );
          //     this.arrTimeoutDice.push(
          //       setTimeout(function () {
          //         self.dice2.node.active = true;
          //         self.dice2.setAnimation(
          //           0,
          //           self.getAnimationDiceStart(res.dice2),
          //           false
          //         );
          //       }, Math.random() * 0)
          //     );
          //     this.arrTimeoutDice.push(
          //       setTimeout(function () {
          //         self.dice3.node.active = true;
          //         self.dice3.setAnimation(
          //           0,
          //           self.getAnimationDiceStart(res.dice3),
          //           false
          //         );
          //       }, Math.random() * 0)
          //     );

          //     this.arrTimeoutDice.push(
          //       setTimeout(function () {
          //         if (self.isNan) {
          //           self.bowl.setPosition(self.bowlStartPos);
          //           self.bowl.active = true;
          //         }
          //       }, 2500)
          //     );
          //     this.dice3.setCompleteListener(() => {
          //       if (!this.isNan) {
          //         this.lblRemainTime2.node.parent.active = true;
          //         this.lblRemainTime2.node.active = true;
          //         this.showResult();
          //         // this.jackpotData = JSON.parse(' {"_pos":22,"_data":{"0":1,"1":8,"2":151,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":2,"10":63,"11":197,"12":0,"13":0,"14":0,"15":0,"16":55,"17":21,"18":181,"19":238},"_length":20,"_controllerId":1,"_cmdId":2199,"_error":0,"jackpot":924169710,"nickname":"","idSession":147397}');
          //         if (this.jackpotData != null) {
          //           this.handleJackpotWin(this.jackpotData);
          //         }
          //       }
          //     });
          //     if (this.histories.length >= 100) {
          //       this.histories.slice(0, 1);
          //     }
          //     this.histories.push({
          //       session: this.referenceId,
          //       dices: [res.dice1, res.dice2, res.dice3],
          //     });

          //     this.arrTimeoutDice.push(
          //       setTimeout(() => {
          //         if (this.node) {
          //           this.soundManager.playAudioEffect(audio_clip.DICE);
          //         }
          //       }, 500)
          //     );
          //   }, 2000)
          // );

          break;
        }
        case cmd.Code.REFUND: {
          let res = new cmd.ReceiveRefund(data);
          let refund = res.moneyRefund;
          this.showToast(App.instance.getTextLang("txt_taixiu_refund1"));
          break;
        }
        case cmd.Code.RESULT: {
          let res = new cmd.ReceiveResult(data);
          cc.log("RESULT TX:", res);
          this.resultData = res;
          if (this.jackpotData == null) {
            this.handleResult();
          }
          break;
        }
        case cmd.Code.NEW_GAME: {
          let res = new cmd.ReceiveNewGame(data);
          Utils.Log("NEW GAME TX:", res);
          this.dices.active = false;
          this.diceEffect.node.active = false;

          // this.dice1.node.active = false;
          // this.dice2.node.active = false;
          // this.dice3.node.active = false;
          for (var i = 0; i < this.arrTimeoutDice.length; i++) {
            clearTimeout(this.arrTimeoutDice[i]);
          }
          this.arrTimeoutDice = [];
          this.lblTotalBetTai.string = "0";
          this.lblTotalBetXiu.string = "0";
          this.lblBetedTai.string = "0";
          this.lblBetedXiu.string = "0";
          this.lblUserTai.string = "0";
          this.lblUserXiu.string = "0";
          this.referenceId = res.referenceId;
          this.lblSession.string = "#" + res.referenceId;
          this.sessionId = res.referenceId;
          this.betingValue = -1;
          this.betingDoor = BetDoor.None;
          this.betedTai = 0;
          this.betedXiu = 0;
          this.isOpenBowl = false;
          this.lastWinCash = 0;
          this.jackpotData = null;
          this.resultData = null;
          Tween.numberTo(this.lbJackPotTai, res["jpTai"], 1.0);
          Tween.numberTo(this.lbJackPotXiu, res["jpXiu"], 1.0);
          this.stopWin();
          break;
        }
        case cmd.Code.HISTORIES: {
          let res = new cmd.ReceiveHistories(data);
          var his = res.data.split(",");
          for (var i = 0; i < his.length; i++) {
            this.histories.push({
              session:
                this.referenceId -
                his.length / 3 +
                parseInt("" + (i + 1) / 3) +
                (this.isBetting ? 0 : 1),
              dices: [parseInt(his[i]), parseInt(his[++i]), parseInt(his[++i])],
            });
          }
          this.updateBtnHistories();
          break;
        }
        case cmd.Code.LOG_CHAT: {
          let res = new cmd.ReceiveLogChat(data);
          var msgs = JSON.parse(res.message);
          for (var i = 0; i < msgs.length; i++) {
            this.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
          }
          this.panelChat.scrollToBottom();
          break;
        }
        case cmd.Code.SCRIBE_CHAT: {
          let res = new cmd.ReceiveLogChat(data);
          var msgs = JSON.parse(res.message);
          for (var i = 0; i < msgs.length; i++) {
            this.panelChat.addMessage(msgs[i]["u"], msgs[i]["m"]);
          }
          this.panelChat.scrollToBottom();
          break;
        }
        case cmd.Code.SEND_CHAT: {
          let res = new cmd.ReceiveSendChat(data);
          switch (res.error) {
            case 0:
              this.panelChat.addMessage(res.nickname, res.message);
              break;
            case 2:
              this.showToast(App.instance.getTextLang("txt_taixiu_chat_error"));
              break;
            case 3:
              this.showToast(
                App.instance.getTextLang("txt_taixiu_chat_error1")
              );
              break;
            case 4:
              this.showToast(
                App.instance.getTextLang("txt_taixiu_chat_error2")
              );
              break;
            default:
              this.showToast(
                App.instance.getTextLang("txt_taixiu_chat_error3")
              );
              break;
          }
          break;
        }
        case cmd.Code.BET: {
          let res = new cmd.ReceiveBet(data);
          switch (res.result) {
            case 0:
              switch (this.betingDoor) {
                case BetDoor.Tai:
                  this.betedTai += this.betingValue;
                  this.lblBetedTai.string = Utils.formatNumber(this.betedTai);
                  break;
                case BetDoor.Xiu:
                  this.betedXiu += this.betingValue;
                  this.lblBetedXiu.string = Utils.formatNumber(this.betedXiu);
                  break;
              }
              Configs.Login.Coin = res.currentMoney;
              BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);

              this.betingValue = -1;
              this.showToast(App.instance.getTextLang("txt_bet_success"));
              break;
            case 2:
              this.betingValue = -1;
              this.showToast(App.instance.getTextLang("txt_bet_error3"));
              break;
            case 3:
              this.betingValue = -1;
              this.showToast(App.instance.getTextLang("txt_not_enough"));
              cc.log("sv ko cho bet dkm");
              break;
            case 4:
              this.betingValue = -1;
              this.showToast(App.instance.getTextLang("txt_bet_error7"));
              break;
            default:
              this.betingValue = -1;
              this.showToast(App.instance.getTextLang("txt_bet_error2"));
              break;
          }
          break;
        }
        case cmd.Code.JACKPOT: {
          let res = new cmd.ReceiveJackpotWin(data);
          this.jackpotData = res;
          break;
        }
        default:
          break;
      }
    }, this);
    for (let i = 0; i < this.buttonsBet1.length; i++) {
      let btn = this.buttonsBet1[i];
      if (i == 0) {
        this.currentBtnBet = btn.node;
      }
      let value = this.listBets[i];
      let strValue = value + "";
      if (value >= 1000000) {
        strValue = value / 1000000 + "M";
      } else if (value >= 1000) {
        strValue = value / 1000 + "K";
      }
      // btn.getComponentInChildren(cc.Label).string = strValue;
      btn.node.on("click", () => {
        App.instance.showBgMiniGame("TaiXiu");
        if (this.betingDoor === BetDoor.None) return;
        if (this.currentBtnBet != null) {
          this.currentBtnBet.color = cc.Color.WHITE;
        }
        this.currentBtnBet = btn.node;
        this.currentBtnBet.color = new cc.Color().fromHEX("#FFBE34");
        let lblBet =
          this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
        let number = Utils.stringToInt(lblBet.string) + value;
        if (number > this.maxBetValue) number = this.maxBetValue;
        lblBet.string = Utils.formatNumber(number);
      });
    }

    this.bowl.on(
      cc.Node.EventType.TOUCH_MOVE,
      (event: cc.Event.EventTouch) => {
        var pos = this.bowl.position;
        pos.x += event.getDeltaX();
        pos.y += event.getDeltaY();
        this.bowl.position = pos;

        let distance = Utils.v2Distance(
          new cc.Vec2(pos.x, pos.y),
          this.bowlStartPos
        );
        if (Math.abs(distance) > 400) {
          this.bowl.active = false;
          this.isOpenBowl = true;
          this.showResult();
          this.showWinCash();
        }
      },
      this
    );
  }

  show() {
    App.instance.showGameMini("TaiXiu");
    App.instance.buttonMiniGame.showTimeTaiXiu(false);
    this.layoutBet.active = false;
    this.layoutBet.y = 28;
    this.lblToast.node.parent.active = false;
    this.lblWinCash.node.active = false;
    this.dices.active = false;
    this.diceEffect.node.active = false;
    this.bowl.active = false;
    // this.dice1.node.active = false;
    // this.dice2.node.active = false;
    // this.dice3.node.active = false;
    MiniGameNetworkClient.getInstance().send(new cmd.SendScribe());
    this.showChat();
  }

  showChat() {
    this.panelChat = this.nodePanelChat.getComponent(PanelChat);
    this.panelChat.show(true);
  }

  dismiss() {
    for (let i = 0; i < this.popups.length; i++) {
      this.popups[i].active = false;
    }
    if (this.panelChat != null) {
      this.panelChat.show(false);
      MiniGameNetworkClient.getInstance().send(new cmd.SendUnScribe());
    }
  }

  actClose() {
    TaiXiuDoubleController.instance.dismiss();
  }

  actChat() {
    App.instance.showBgMiniGame("TaiXiu");
    this.panelChat.show(!this.panelChat.node.active);
  }

  actBetTai() {
    App.instance.showBgMiniGame("TaiXiu");
    if (!this.isBetting) {
      this.showToast(App.instance.getTextLang("txt_bet_error3"));
      return;
    }
    if (this.betingValue >= 0) {
      this.showToast(App.instance.getTextLang("txt_notify_fast_action"));
      return;
    }
    if (this.betedXiu > 0) {
      this.showToast(App.instance.getTextLang("txt_taixiu_chat_error4"));
      return;
    }
    this.betingDoor = BetDoor.Tai;
    this.lblBetTai.string = "0";
    this.lblBetXiu.string = App.instance.getTextLang("ĐẶT CƯỢC");
    this.layoutBet.active = true;
    cc.tween(this.layoutBet)
      .to(0.5, { y: -316 }, { easing: cc.easing.sineOut })
      .start();
    this.layoutBet1.active = true;
  }

  actBetXiu() {
    App.instance.showBgMiniGame("TaiXiu");
    if (!this.isBetting) {
      this.showToast(App.instance.getTextLang("txt_bet_error3"));
      return;
    }
    if (this.betingValue >= 0) {
      this.showToast(App.instance.getTextLang("txt_notify_fast_action"));
      return;
    }
    if (this.betedTai > 0) {
      this.showToast(App.instance.getTextLang("txt_taixiu_chat_error4"));
      return;
    }
    this.betingDoor = BetDoor.Xiu;
    this.lblBetXiu.string = "0";
    this.lblBetTai.string = App.instance.getTextLang("ĐẶT CƯỢC");
    this.layoutBet.active = true;
    cc.tween(this.layoutBet)
      .to(0.5, { y: -316 }, { easing: cc.easing.sineOut })
      .start();
    this.layoutBet1.active = true;
  }

  actOtherNumber() {
    App.instance.showBgMiniGame("TaiXiu");
    this.layoutBet1.active = false;
  }

  actAgree() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.betingValue >= 0 || !this.canBet) {
      this.showToast(App.instance.getTextLang("txt_notify_fast_action"));
      return;
    }
    if (this.betingDoor === BetDoor.None) return;
    var lblBet =
      this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
    this.betingValue = Utils.stringToInt(lblBet.string);
    this.betingDoor = this.betingDoor;
    MiniGameNetworkClient.getInstance().send(
      new cmd.SendBet(
        this.referenceId,
        this.betingValue,
        this.betingDoor == BetDoor.Tai ? 1 : 0,
        this.remainTime
      )
    );
    lblBet.string = "0";

    this.canBet = false;
    this.scheduleOnce(function () {
      this.canBet = true;
    }, 1);
  }

  actCancel() {
    App.instance.showBgMiniGame("TaiXiu");
    this.lblBetXiu.string = App.instance.getTextLang("txt_taixiu_small");
    this.lblBetTai.string = App.instance.getTextLang("txt_taixiu_big");
    this.betingDoor = BetDoor.None;
    this.layoutBet.active = false;
    this.layoutBet.y = 28;
  }

  actBtnGapDoi() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.betingDoor === BetDoor.None) return;
    let lblBet =
      this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;

    let number = Utils.stringToInt(lblBet.string) + Configs.Login.Coin;
    if (number > this.maxBetValue) number = this.maxBetValue;
    lblBet.string = Utils.formatNumber(number);
  }

  actBtnDelete() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.betingDoor === BetDoor.None) return;
    var lblBet =
      this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
    var number = "" + Utils.stringToInt(lblBet.string);
    number = number.substring(0, number.length - 1);
    number = Utils.formatNumber(Utils.stringToInt(number));
    lblBet.string = number;
  }

  actBtn000() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.betingDoor === BetDoor.None) return;
    var lblBet =
      this.betingDoor === BetDoor.Tai ? this.lblBetTai : this.lblBetXiu;
    var number = Utils.stringToInt(lblBet.string + "000");
    if (number > this.maxBetValue) number = this.maxBetValue;
    lblBet.string = Utils.formatNumber(number);
  }

  actNan() {
    App.instance.showBgMiniGame("TaiXiu");
    this.isNan = !this.isNan;
    this.btnNan.getComponent(cc.Sprite).spriteFrame = this.isNan
      ? this.sprFrameBtnNan2
      : this.sprFrameBtnNan;
  }
  actPopupHonor() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.popupHonor == null) {
      this.popupHonor = cc
        .instantiate(this.popupsPr[0])
        .getComponent("TaiXiuMini.PopupHonors");
      this.popupHonor.node.parent = this.popupContainer;
      this.popupHonor.show();
      this.popups.push(this.popupHonor.node);
      App.instance.showLoading(false);
    } else {
      this.popupHonor.show();
    }
  }
  actPopupHistory() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.popupHistory == null) {
      this.popupHistory = cc
        .instantiate(this.popupsPr[1])
        .getComponent("TaiXiuMini.PopupHistory");
      this.popupHistory.node.parent = this.popupContainer;
      this.popupHistory.show();
      this.popups.push(this.popupHistory.node);
      App.instance.showLoading(false);
    } else {
      this.popupHistory.show();
    }
  }
  actPopupGuide() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.popupGuide == null) {
      this.popupGuide = cc.instantiate(this.popupsPr[4]).getComponent("Dialog");
      this.popupGuide.node.parent = this.popupContainer;
      this.popupGuide.show();
      this.popups.push(this.popupGuide.node);
      App.instance.showLoading(false);
    } else {
      this.popupGuide.show();
    }
  }
  actPopupSoiCau() {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.popupSoiCau == null) {
      this.popupSoiCau = cc
        .instantiate(this.popupsPr[3])
        .getComponent("TaiXiuMini.PopupSoiCau");
      this.popupSoiCau.node.parent = this.popupContainer;
      this.popupSoiCau.show();
      this.popups.push(this.popupSoiCau.node);
      App.instance.showLoading(false);
    } else {
      this.popupSoiCau.show();
    }
  }
  actPopupHistorySession() {
    this.showHistorySession(this.sessionId - 1);
  }
  private showHistorySession(session: number) {
    App.instance.showBgMiniGame("TaiXiu");
    if (this.popupDetailSession == null) {
      this.popupDetailSession = cc
        .instantiate(this.popupsPr[2])
        .getComponent("TaiXiuMini.PopupDetailHistory");
      this.popupDetailSession.node.parent = this.popupContainer;
      this.popupDetailSession.showDetail(session);
      this.popups.push(this.popupDetailSession.node);
      App.instance.showLoading(false);
    } else {
      this.popupDetailSession.showDetail(session);
    }
  }
  private showResult() {
    this.dices.active = true;
    this.lblScore.node.parent.active = true;
    this.lblScore.node.active = true;
    this.lblScore.string = "" + this.lastScore;
    this.eftai.active = true;
    this.efxiu.active = false;
    if (this.lastScore >= 11) {
            this.eftai.parent.getChildByName("text").active = false;
            this.efxiu.parent.getChildByName("text").active = true;
      //if (LanguageLanguageManager.instance.languageCode == "vi") {
       // this.bgSpine.setAnimation(0, "tài win", true);
     // } else if (LanguageLanguageManager.instance.languageCode == "en") {
        //this.bgSpine.setAnimation(0, "big win", true);
      //}
      //this.bgSpine.node.parent.getChildByName("text").active = false;
    } else {
      this.efxiu.active = true;
            this.eftai.active = false;
            this.efxiu.parent.getChildByName("text").active = false;
            this.eftai.parent.getChildByName("text").active = true;
      //if (LanguageLanguageManager.instance.languageCode == "vi") {
        //this.bgSpine.setAnimation(0, "xiu win", true);
      //} else if (LanguageLanguageManager.instance.languageCode == "en") {
        //this.bgSpine.setAnimation(0, "small win", true);
      //}
      //this.bgSpine.node.parent.getChildByName("text").active = false;
    }
    this.updateBtnHistories();
    for (var i = 0; i < this.arrTimeoutDice.length; i++) {
      clearTimeout(this.arrTimeoutDice[i]);
    }
    this.arrTimeoutDice = [];
  }

  private stopWin() {
    this.eftai.active = false;
        this.efxiu.active = false;
        this.eftai.parent.getChildByName("text").active = true;
        this.efxiu.parent.getChildByName("text").active = true;
    //this.bgSpine.node.active = false;
    //this.bgSpine.node.parent.getChildByName("text").active = true;
    // this.tai.stopAllActions();
    // this.tai.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));

    // this.xiu.stopAllActions();
    // this.xiu.runAction(cc.spawn(cc.scaleTo(0.3, 1), cc.tintTo(0.3, 255, 255, 255)));
  }

  private showToast(message: string) {
    this.lblToast.string = message;
    let parent = this.lblToast.node.parent;
    parent.stopAllActions();
    parent.active = true;
    parent.opacity = 0;
    parent.runAction(
      cc.sequence(
        cc.fadeIn(0.1),
        cc.delayTime(2),
        cc.fadeOut(0.2),
        cc.callFunc(() => {
          parent.active = false;
        })
      )
    );
  }

  private showWinCash() {
    if (this.lastWinCash <= 0) return;
    this.soundManager.playAudioEffect(audio_clip.WIN);
    this.lblWinCash.node.stopAllActions();
    this.lblWinCash.node.active = true;
    this.lblWinCash.node.scale = 0;
    // this.lblWinCash.node.setPosition(cc.Vec2.ZERO);
    Tween.numberTo(this.lblWinCash, this.lastWinCash, 0.5, (n) => {
      return "+" + Utils.formatNumber(n);
    });
    this.lblWinCash.node.runAction(
      cc.sequence(
        cc.scaleTo(0.5, 1),
        cc.delayTime(2),
        cc.moveBy(1, cc.v2(0, 60)),
        cc.callFunc(() => {
          this.lblWinCash.node.active = false;
        })
      )
    );
    BroadcastReceiver.send(BroadcastReceiver.USER_UPDATE_COIN);
  }

  updateBtnHistories() {
    let histories = this.histories.slice();
    if (histories.length > this.btnHistories.childrenCount) {
      histories.splice(0, histories.length - this.btnHistories.childrenCount);
    }
    let idx = histories.length - 1;
    let totalHistoryBtn = this.btnHistories.childrenCount;
    this.tooltip.node.active = false;
    for (var i = totalHistoryBtn - 1; i >= 0; i--) {
      if (idx >= 0) {
        let _idx = idx;
        const history: { dices: number[]; session: number } = histories[_idx];
        var score = history.dices[0] + history.dices[1] + history.dices[2];
        this.btnHistories.children[i].getComponent(cc.Sprite).spriteFrame =
          score >= 11 ? this.sprFrameTai : this.sprFrameXiu;
          
        this.btnHistories.children[i].off("click");
        this.btnHistories.children[i].off(cc.Node.EventType.MOUSE_ENTER)

        this.btnHistories.children[i].on("click", () => {
          this.showHistorySession(history.session);
        });

        this.btnHistories.children[i].on(
          cc.Node.EventType.MOUSE_ENTER,
          (e: { target:cc.Node }) => {
            const newPos = this.tooltip.node.parent.convertToNodeSpaceAR(
              e.target.parent.convertToWorldSpaceAR(e.target.getPosition())
            );
            this.tooltip.init(history.session, history.dices, newPos);
          }
        );
        this.btnHistories.children[i].on( cc.Node.EventType.MOUSE_LEAVE, () => {
          this.tooltip.disappear();
        });
        this.btnHistories.children[i].active = true;
      } else {
        this.btnHistories.children[i].active = false;
      }
      idx--;
    }
  }

  sendChat(message: string) {
    let _this = this;
    if (!_this.isCanChat) {
      this.showToast(App.instance.getTextLang("txt_notify_fast_action"));
      return;
    }
    _this.isCanChat = false;
    this.scheduleOnce(function () {
      _this.isCanChat = true;
    }, 1);
    var req = new cmd.SendChat(unescape(encodeURIComponent(message)));
    MiniGameNetworkClient.getInstance().send(req);
  }
  handleJackpotWin(res) {
    this.animJP.node.active = true;
    this.lbJackPot.string = "0";
    Tween.numberTo(this.lbJackPot, res["jackpot"], 3.0);
    this.scheduleOnce(() => {
      this.animJP.node.active = false;
      this.bowl.active = false;
      if (this.resultData != null) {
        this.handleResult();
      }
    }, 4.0);
  }
  handleResult() {
    Configs.Login.Coin = this.resultData.currentMoney;
    this.lastWinCash = this.resultData.totalMoney;
    if (!this.bowl.active) {
      if (this.resultData.totalMoney > 0) this.showWinCash();
    }
  }
}
