module.exports = {
  // 偵測壓縮的檔案，包板時(npm run build)時會進行過濾，沒有用到的就去除
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          600: 'var(--color-primary-600)',
          500: 'var(--color-primary-500)',
          400: 'var(--color-primary-400)',
          300: 'var(--color-primary-300)',
          200: 'var(--color-primary-200)',
          100: 'var(--color-primary-100)',
        },
        secondary: {
          600: 'var(--color-secondary-600)',
          500: 'var(--color-secondary-500)',
          400: 'var(--color-secondary-400)',
          300: 'var(--color-secondary-300)',
          200: 'var(--color-secondary-200)',
          100: 'var(--color-secondary-100)',
        },
        room: {
          rush: 'var(--color-room-rush)',
          'rush-highlight': 'var(--color-room-highlight)',
          reward: 'var(--color-room-reward)',
          chanlage: 'var(--color-room-chanlage)',
          kill: 'var(--color-room-kill)',
          'kill-dark': 'var(--color-room-kill-dark)',
          bonus: 'var(--color-room-bonus)',
          'bonus-dark': 'var(--color-room-bonus-dark)',
          vip: 'var(--color-room-vip)',
          'vip-dark': 'var(--color-room-vip-dark)',
        },
      },
      height: {
        // gamehall banner height
        slideBanners: '9rem',
      },
      minWidth: {
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '2rem',
        5: '3rem',
        6: '4rem',
        7: '5rem',
      },
      flex: {
        full: '1 0 100%',
      },
      backgroundImage: {
        default: "linear-gradient(to bottom, transparent 60%, var(--color-primary-500)), linear-gradient(var(--color-primary-400), var(--color-primary-400)), url('~@/assets/images/gamehall/bg-game-hall.jpg')",
        // 樣式透過 結構疊層會比較好
        rush: "url('~@/assets/images/gamehall/gop/bg-rush.jpg')",
        // TW+SCSS混用 在這邊比較難維護
        reward: " linear-gradient(to right, var(--color-room-reward-dark), var(--color-room-reward)), url('~@/assets/images/gamehall/gop/bg-reward.jpg')",
        rewardMain: "url('~@/assets/images/gamehall/gop/bg-reward-main.png')",
        chanlage: " linear-gradient(to right, var(--color-room-chanlage-dark), var(--color-room-chanlage)), url('~@/assets/images/gamehall/gop/bg-chanlage.jpg')",
        chanlageMain: "url('~@/assets/images/gamehall/gop/bg-chanlage-main.png')",
        kill: "url('~@/assets/images/gamehall/gop/bg-kill.jpg')",
        'kill-main': "url('~@/assets/images/gamehall/gop/bg-kill-main.png')",
        bonus: "url('~@/assets/images/gamehall/gop/bg-bonus.jpg')",
        'bonus-main': "url('~@/assets/images/gamehall/gop/bg-bonus-main.png')",
        vip: "url('~@/assets/images/gamehall/gop/bg-vip.jpg')",
        'vip-main': "url('~@/assets/images/gamehall/gop/bg-vip-main.png')",

      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-primary-100)',
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
    extend: {
      backgroundColor: ['responsive', 'hover', 'active'],
    },
  },
  plugins: [],
};
