import {DummyFirework} from './DummyFirework'
import {LaunchFireworkImpl} from './LaunchFirework'
import { DefaultCheckedPassword } from "./DefaultCheckPassword";
import DefaultFirework from "./DefaultFirework";

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

    it('間違ったパスワードの場合、errorがthrowされる_validationCheck', () => {
        const invalidPassword = '88event'
        const dummyFirework = new DummyFirework()
        const checkPassword = new DefaultCheckedPassword()
        const launchFirework = new LaunchFireworkImpl(dummyFirework, checkPassword, invalidPassword)

        // 間違ったパスワードの場合、errorがthrowされるので、テストがパスするはず
        expect(() => launchFirework.validationCheck()).toThrowError()
    })

})
