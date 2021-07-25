module.exports = {
  // 偵測壓縮的檔案，包板時(npm run build)時會進行過濾，沒有用到的就去除
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        // gamehall banner height
        slideBanners: '9rem',
      },
      backgroundImage: {
        default: "linear-gradient(to bottom, transparent, var(--color-primary-600)), linear-gradient(var(--color-primary-600), var(--color-primary-600)), url('~@/assets/images/gamehall/bg-game-hall.jpg')",
      },
      textColor: {
        skin: {
          base: 'var( --color-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-primary-600)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
