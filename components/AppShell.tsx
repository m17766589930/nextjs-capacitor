/**
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components
 * 将该组件标记为客户端渲染
 */
'use client';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
/**
 * https://capacitorjs.com/docs/apis/status-bar
 */
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Tabs from './pages/Tabs';

setupIonicReact({});

/**
 * 监听用户对应用程序主题的偏好（深色或浅色模式）的更改。当用户切换偏好时，它会尝试将应用程序的状态栏样式设置为相应的模式（深色或浅色）
 */
window
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   * 创建了一个媒体查询，用于检测用户设备是否偏好暗色模式
   * 这个查询指定了 (prefers-color-scheme: dark)，表示如果用户的主题偏好是暗色模式，那么此查询会返回 true
   */
  .matchMedia('(prefers-color-scheme: dark)')
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * 给上面的媒体查询添加了一个事件监听器，监听 change 事件。当用户设备的主题偏好发生变化时，会触发这个事件，并执行回调函数
   * 'change' 和 status.matches 都是源码中定义好的
   */
  .addEventListener('change', async status => {
    try {
      await StatusBar.setStyle({
        style: status.matches ? Style.Dark : Style.Light,
      });
    } catch { }
  });

const AppShell = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          <Route path="/" render={() => <Tabs />} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
