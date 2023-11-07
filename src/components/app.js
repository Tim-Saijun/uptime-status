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
        <div id='footer'>
          <p>检测频率 5 分钟，如果网站状态正常，而您无法访问，请检查您的网络代理</p>
          <p>&copy;</p>
          <p><Link to='https://rss.uptimerobot.com/u2344984-b51264a6adbb1b5d110dbd5e09fa05b0' text=' ' /></p>
          <p>2023 <Link to='https://www.zair.top/' text='以太工坊' />, Version {Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
