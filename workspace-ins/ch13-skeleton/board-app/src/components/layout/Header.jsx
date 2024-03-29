import { useNavigate } from 'react-router-dom';
import { memberState } from "@recoil/user/atoms.mjs";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import Button from '@components/Button';
import Theme from '@components/Theme';

function Header(){
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const [user, setUser] = useRecoilState(memberState);

  return (
    <header className="min-w-80 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 transition-color duration-500 ease-in-out">
      <nav className="flex flex-wrap justify-center items-center p-4 md:flex-nowrap md:justify-between">
        <div className="w-1/2 order-1 md:w-auto">
          <a className="flex items-center gap-2" href="/">
            {/* <img className="mr-3 h-6 sm:h-9" src="/vite.svg" alt="로고 이미지" /> */}
            <svg
              width="32"
              height="28"
              viewBox="0 0 2194 1954"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="text-sky-700 dark:text-sky-200"
                d="M2194 977.224C2194 831.881 2011.99 694.141 1732.93 608.725C1797.33 324.301 1768.71 98.0136 1642.59 25.566C1613.52 8.57212 1579.54 0.522396 1542.42 0.522396V100.25C1562.99 100.25 1579.54 104.275 1593.4 111.877C1654.22 146.759 1680.61 279.58 1660.03 450.413C1655.12 492.451 1647.07 536.724 1637.23 581.892C1549.57 560.426 1453.87 543.88 1353.25 533.147C1292.88 450.413 1230.27 375.282 1167.21 309.543C1313 174.039 1449.85 99.8025 1542.87 99.8025V0.0751953C1419.88 0.0751953 1258.89 87.7279 1096.11 239.778C933.322 88.6223 772.327 1.86403 649.345 1.86403V101.591C741.917 101.591 879.21 175.381 1025 309.99C962.391 375.73 899.782 450.413 840.303 533.147C739.234 543.88 643.532 560.426 555.879 582.339C545.593 537.619 537.991 494.239 532.624 452.649C511.605 281.816 537.543 148.995 597.916 113.666C611.333 105.616 628.774 102.039 649.345 102.039V2.31123C611.78 2.31123 577.792 10.361 548.276 27.3548C422.611 99.8025 394.437 325.642 459.282 609.172C181.119 695.036 0 832.328 0 977.224C0 1122.57 182.013 1260.31 461.071 1345.72C396.673 1630.15 425.294 1856.43 551.407 1928.88C580.475 1945.87 614.463 1953.92 652.029 1953.92C775.011 1953.92 936.005 1866.27 1098.79 1714.22C1261.57 1865.38 1422.57 1952.14 1545.55 1952.14C1583.11 1952.14 1617.1 1944.09 1646.62 1927.09C1772.28 1854.64 1800.46 1628.8 1735.61 1345.28C2012.88 1259.86 2194 1122.12 2194 977.224ZM1611.74 678.936C1595.19 736.626 1574.62 796.104 1551.36 855.583C1533.03 819.806 1513.8 784.03 1492.78 748.253C1472.21 712.477 1450.29 677.595 1428.38 643.607C1491.88 652.998 1553.15 664.626 1611.74 678.936ZM1406.91 1155.21C1372.03 1215.59 1336.26 1272.83 1299.14 1326.05C1232.5 1331.86 1164.98 1334.99 1097 1334.99C1029.47 1334.99 961.943 1331.86 895.757 1326.49C858.639 1273.27 822.415 1216.48 787.532 1156.55C753.545 1097.97 722.687 1038.49 694.513 978.565C722.24 918.639 753.545 858.714 787.085 800.129C821.968 739.756 857.744 682.514 894.862 629.296C961.496 623.482 1029.02 620.352 1097 620.352C1164.53 620.352 1232.06 623.482 1298.24 628.849C1335.36 682.067 1371.59 738.862 1406.47 798.788C1440.46 857.372 1471.31 916.851 1499.49 976.776C1471.31 1036.7 1440.46 1096.63 1406.91 1155.21ZM1551.36 1097.08C1575.51 1157 1596.08 1216.93 1613.08 1275.06C1554.49 1289.37 1492.78 1301.45 1428.83 1310.84C1450.74 1276.41 1472.65 1241.08 1493.23 1204.85C1513.8 1169.08 1533.03 1132.85 1551.36 1097.08ZM1097.89 1574.25C1056.3 1531.31 1014.71 1483.46 973.571 1431.14C1013.82 1432.93 1054.96 1434.27 1096.55 1434.27C1138.59 1434.27 1180.18 1433.38 1220.88 1431.14C1180.63 1483.46 1139.04 1531.31 1097.89 1574.25ZM765.172 1310.84C701.669 1301.45 640.401 1289.82 581.817 1275.51C598.364 1217.82 618.935 1158.34 642.19 1098.86C660.526 1134.64 679.755 1170.42 700.774 1206.19C721.793 1241.97 743.259 1276.85 765.172 1310.84ZM1095.66 380.202C1137.25 423.133 1178.84 470.985 1219.98 523.308C1179.73 521.519 1138.59 520.178 1097 520.178C1054.96 520.178 1013.37 521.072 972.676 523.308C1012.93 470.985 1054.52 423.133 1095.66 380.202ZM764.725 643.607C742.812 678.042 720.899 713.371 700.327 749.595C679.755 785.372 660.526 821.148 642.19 856.925C618.041 796.999 597.469 737.073 580.475 678.936C639.06 665.073 700.774 652.998 764.725 643.607ZM360.002 1203.51C201.691 1135.98 99.2801 1047.44 99.2801 977.224C99.2801 907.012 201.691 818.018 360.002 750.937C398.462 734.39 440.499 719.632 483.879 705.769C509.369 793.421 542.91 884.652 584.5 978.118C543.357 1071.14 510.264 1161.92 485.22 1249.13C440.947 1235.26 398.909 1220.06 360.002 1203.51ZM600.6 1842.57C539.78 1807.69 513.394 1674.87 533.966 1504.03C538.885 1462 546.935 1417.72 556.773 1372.55C644.426 1394.02 740.129 1410.57 840.75 1421.3C901.123 1504.03 963.732 1579.16 1026.79 1644.9C880.999 1780.41 744.153 1854.64 651.134 1854.64C631.01 1854.2 614.016 1850.17 600.6 1842.57ZM1661.38 1501.8C1682.39 1672.63 1656.46 1805.45 1596.08 1840.78C1582.67 1848.83 1565.23 1852.41 1544.65 1852.41C1452.08 1852.41 1314.79 1778.62 1169 1644.01C1231.61 1578.27 1294.22 1503.59 1353.7 1420.85C1454.77 1410.12 1550.47 1393.57 1638.12 1371.66C1648.41 1416.83 1656.46 1460.21 1661.38 1501.8ZM1833.55 1203.51C1795.09 1220.06 1753.05 1234.82 1709.67 1248.68C1684.18 1161.03 1650.64 1069.8 1609.05 976.329C1650.2 883.31 1683.29 792.527 1708.33 705.321C1752.61 719.185 1794.64 734.39 1834 750.937C1992.31 818.465 2094.72 907.012 2094.72 977.224C2094.27 1047.44 1991.86 1136.43 1833.55 1203.51Z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xl font-semibold">게시판</span>
          </a>
        </div>
        <div className="w-auto order-2 text-lg mt-4 md:mt-0">
          <ul className="flex items-center gap-6 uppercase">
            <li className="hover:font-semibold"><Link to="/boards">정보공유</Link></li>
            <li className="hover:font-semibold"><Link to="/boards">자유게시판</Link></li>
            <li className="hover:font-semibold"><Link to="/boards">질문게시판</Link></li>
          </ul>
        </div>
        <div className="w-1/2 order-1 flex justify-end items-center md:order-2 md:w-auto">
          { user ? (
            <p className="flex items-center">
              <img className="w-8 rounded-full mr-2" src={`${ import.meta.env.VITE_API_SERVER }/files/${ user.profile }`}></img>
              { user.name }님 :)
              <Button size="sm" onClick={ handleLogout }>로그아웃</Button>
            </p>
          ) : (
            <div className="flex justify-end">
              <Button size="sm" onClick={ () => navigate('/users/login') }>로그인</Button>
              <Button size="sm" bgColor="gray" onClick={ () => navigate('/users/signup') }>회원가입</Button>
            </div>
          ) }
          <Theme />
        </div>
      </nav>
    </header>
  );
}

export default Header;