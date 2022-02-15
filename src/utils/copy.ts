import useClipboard from 'vue-clipboard3'
import {ElMessage} from "element-plus";

export async function copy(value: string) {
    const toClip = useClipboard();
    try {
        await toClip.toClipboard(value);
        ElMessage({
            showClose: true,
            message: "复制成功",
            type: 'success',
            duration: 2000
        });
    } catch (e) {
        console.log(e);
        ElMessage({
            showClose: true,
            message: "复制失败",
            type: 'error',
            duration: 2000
        });
    }

}
