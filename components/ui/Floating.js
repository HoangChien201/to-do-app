import { FloatingAction } from "react-native-floating-action"
import { Color } from "../../constant/Color";

function Floating({onPress}){
    const actions = [
        {
          text: "Add",
          name: "add_task",
          position: 1,
          icon:require('../../assests/images/plus.png')
        }
    ]
    return(
        <FloatingAction
            actions={actions}
            onPressItem={onPress}
            color={Color.primary200}
        />
    )
}
export default Floating;