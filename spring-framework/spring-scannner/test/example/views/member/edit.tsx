import * as React from "react";
import {ReactViewMapping} from "fengwuxp-spring-react/src/annoations/ReactViewMapping";


interface EditProps {

}

@ReactViewMapping({
    name: "用户编辑",
    pathname: "member_edit",
    condition: (context) => {

        return false;
    }
})
export default class EditView extends React.Component<EditProps> {

}