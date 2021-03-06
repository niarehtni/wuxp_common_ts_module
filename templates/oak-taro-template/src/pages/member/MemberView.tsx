import Taro, {Config,Component} from '@tarojs/taro'
import {View, Text} from '@tarojs/components'



interface MemberViewProps {

}

interface MemberViewState {

}


export default class MemberView extends Component<MemberViewProps, MemberViewState> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '个人中心'
  };

  componentWillMount() {
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }

  componentDidShow() {

  }

  componentDidHide() {
  }


  render() {
    return (
      <View>
        <Text>个人中心</Text>
      </View>
    )
  }
}

