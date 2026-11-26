import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { GITHUB_URL } from '@/constant';
const Footer: React.FC = () => {
  const defaultMessage = '程序员 Moon 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'coderNav',
          title: '编程导航',
          href: 'https://www.codefather.cn/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> moon GitHub
            </>
          ),
          href: GITHUB_URL,
          blankTarget: true,
        },
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
