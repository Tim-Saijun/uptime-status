import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    const { ApiKeys } = window.Config;
    if (Array.isArray(ApiKeys)) return ApiKeys;
    if (typeof ApiKeys === 'string') return [ApiKeys];
    return [];
  }, []);

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='text-section'>
        <div id="site">
          <br />
          <h2>故障记录</h2>
          <br />
          <h3>🍁Service-冬季救援-MC游戏服务器 is DOWN on Tue, 07 Nov 2023 13:05:54 +0800 </h3>
          <br />
          <p>  🆗已确认故障</p>
          <br />
          <ul>
            <li>2023-11-07 13:05:54(UTC +8) 已确认故障原因：手动关停服务，短时间内不恢复服务.</li>
            <li>2023-11-07 13:05:54(UTC +8) Alert Details: Port is not listening.</li>
          </ul>
          <hr />
          <br />
          </div>

          <div id="site">
          <br />
          <h3>🍁Service-以太工坊-主站博客 is DOWN on Mon, 06 Nov 2023 12:42:18 +0800 </h3>
          <br />
          <p>  🆗已解决故障</p>
          <br />
          <ul>
            <li>2023-11-07 10:34:23(UTC +8) 已解决故障：通过联系CDN提供商手动刷新缓存，全部网络环境均可正常访问.</li>
            <li>2023-11-06 13:02:14(UTC +8) 降级服务：境内网络环境可正常访问，境外网络环境等待缓存刷新.</li>
            <li>2023-11-06 13:02:14(UTC +8) 已确认故障原因：更换CDN服务导致的缓存错乱.</li>
            <li>2023-11-06 12:42:18(UTC +8) Alert Details: 400 - Bad Request (The request could not be processed by the server due to invalid syntax.)</li>
          </ul>
          <hr />
          <br />
          </div>
          
          <div id="site">
          <br />
          <h3>🍁Node-纽约-Azure is DOWN on Sun, 22 Oct 2023 20:49:42 +0800 </h3>
          <br />
          <p>  🆗已确认故障</p>
          <br />
          <ul>
            <li>2023-10-22 20:49:42(UTC +8) 已确认故障原因：手动关停节点，短时间内不提供服务.</li>
            <li>2023-10-22 20:49:42(UTC +8) Alert Details: Ping response is not received.</li>
          </ul>
          <hr />
          <br />
          </div>

        </div>
        <div id='footer'>
          <p>检测频率 5 分钟，如果网站状态正常，而您无法访问，请检查您的网络代理</p>
          <p>&copy;<Link to='https://rss.uptimerobot.com/u2344984-b51264a6adbb1b5d110dbd5e09fa05b0' text='2' />023 <Link to='https://www.zair.top/' text='以太工坊' />, Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
