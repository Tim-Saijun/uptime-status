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
          <p>&copy;2024 <Link to='https://www.zair.top/' text='以太工坊' />, Version {Package.version}</p>
          <p><Link to='https://beian.miit.gov.cn/' text='苏ICP备2024067500号-1' /></p>
          <p>检测频率 5 分钟，如果网站状态正常，而您无法访问，请检查您的网络代理</p>
        </div>
      </div>
    </>
  );
}

export default App;
