
// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {

    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
    }

    // シーン初期化処理
    create() {
        this.add.image(D_WIDTH/2, D_HEIGHT/2, 'background');
        // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.player = this.add.image(500, 350, 'taro');
        this.player_direction = 1;

    }
    
  // 毎フレーム実行される繰り返し処理
    update() {
        if (this.player.x >= D_WIDTH - 100) this.player_direction = -1;
        if (this.player.x <= 110) this.player_direction = 1;

        if (this.player_direction == 1) {
            this.player.x += 6;
            this.player.y += 6;
            // 回転角度を更新
            // this.player.angle += 5;
        } else {
            this.player.x -= 6;
            this.player.y -= 6;
            // 回転角度を更新
            // this.player.angle += 5;
        }
                
    
    }
}
