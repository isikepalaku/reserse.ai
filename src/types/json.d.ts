import { AnimationConfigWithData } from 'lottie-react';

declare module '*.json' {
    const value: AnimationConfigWithData['animationData'];
    export default value;
}
