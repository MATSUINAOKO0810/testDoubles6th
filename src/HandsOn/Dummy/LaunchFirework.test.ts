import { DefaultCheckedPassword } from "./DefaultCheckPassword";
import { DummyFireworks } from "./DummyFireworks";
import { LaunchFireworkImpl } from "./LaunchFirework";

// スタブのテストでは、説明の簡略化のためにlaunchが文字列を返す仕様にしていました。
// ですが、本来はLaunchFireworkImplが何かしらバリデーションチェックした結果花火が打ち上げられるべきです。
// そこで、花火を打つ時は、FireworkオブジェクトとcheckPasswordオブジェクトとパスワードを渡し、正しければFireworkのfireメソッドを呼ぶようにします。
// 本物のFireworkオブジェクトのfireメソッドを呼んでしまうと、本物の花火が打ち上げされてしまいます。
// Dummyを使用して、間違ったパスワードを渡した場合に、バリデーションチェックが正しく行われていることを確認しましょう。


describe('LaunchFireworkImpl（花火打ち上げ装置）のテスト', () => {
    // it('間違ったパスワードの場合、errorがthrowされる', () => {
    //     const invalidPassword = '88event'
    //     const dummyFirework = new DummyFirework()
    //     const checkPassword = new DefaultCheckedPassword()
    //     const launchFirework = new LaunchFireworkImpl(dummyFirework, checkPassword, invalidPassword)
    //
    //     // 間違ったパスワードの場合、errorがthrowされるので、テストがパスするはず
    //     expect(() => launchFirework.launch()).toThrowError()
    // })
    //
    // it('正しいパスワードの場合、errorがthrowされない', () => {
    //     const invalidPassword = 'correctPassword'
    //     const dummyFirework = new DummyFirework()
    //     const checkPassword = new DefaultCheckedPassword()
    //     const launchFirework = new LaunchFireworkImpl(dummyFirework, checkPassword, invalidPassword)
    //
    //     // 正しいパスワードの場合、errorがthrowされないので、テストがパスするはず
    //     expect(() => launchFirework.launch()).not.toThrowError()
    // })

    //こっちのテストのほうがdummyとしての問題として適切かな？🍎
    it('間違ったパスワードの場合、errorがthrowされる_validationCheck', () => {

        // 間違ったパスワードの場合、errorがthrowされるので、テストがパスするはず
        // コメントブロック解除して、テストが実行できるように変更しましょう

        const invalidPassword = '88event'
        const dummyFireworks = new DummyFireworks()
        const defaultCheckPassword = new DefaultCheckedPassword()
        const launchFirework = new LaunchFireworkImpl(dummyFireworks,defaultCheckPassword,invalidPassword)

        expect(() => launchFirework.validationCheck()).toThrowError()
    })
})
