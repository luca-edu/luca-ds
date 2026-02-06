import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ProfileDrawer } from '../components/ProfileDrawer';
import type { ProfileDrawerSection } from '../components/ProfileDrawer';

const meta = {
  title: 'Components/ProfileDrawer',
  component: ProfileDrawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    /* ---- Core ---- */
    open: { control: 'boolean', description: 'Whether the drawer is visible.' },
    onClose: { control: false, description: 'Called when the user requests to close the drawer.' },
    title: { control: 'text', description: 'Header title (e.g. "Mi cuenta").' },
    width: { control: 'text', description: 'Drawer width. @default 700' },

    /* ---- Avatar (mutually exclusive branches) ---- */
    avatar: {
      control: false,
      description:
        'Fully custom avatar element (ReactNode). Mutually exclusive with `avatarSrc`. Use for non-standard avatar layouts.',
    },
    avatarSrc: {
      control: 'text',
      description:
        'Image source for the profile avatar (convenience API). Renders a circular container with object-fit, fallback, and CSS-variable sizing internally.',
    },
    avatarAlt: {
      control: 'text',
      description:
        'Alt text for the avatar image. Defaults to "" (decorative). Set explicitly when the avatar conveys meaning beyond the displayed name.',
    },

    /* ---- Slot content ---- */
    headerLeft: {
      control: false,
      description:
        'Element rendered left of the title. Auto-replaced with a back arrow during the password flow.',
    },
    profileInfo: {
      control: false,
      description: 'Content inside the profile info card (name, email, school, etc.).',
    },
    sections: {
      control: false,
      description: 'Array of `ProfileDrawerSection` objects rendered as white rounded cards.',
    },
    footer: {
      control: false,
      description: 'Footer element after all sections (e.g. version text).',
    },
    detailPanel: {
      control: false,
      description:
        'When provided, replaces the main slot-based body. Use for sub-views not covered by the built-in password form.',
    },
    children: {
      control: false,
      description: 'Escape hatch: render arbitrary children instead of the slot-based layout.',
    },
    drawerProps: {
      control: false,
      description:
        'Extra props forwarded to the underlying `<Drawer>` (e.g. `zIndex`, `getContainer`, `placement`).',
    },

    /* ---- Built-in password change ---- */
    onPasswordSubmit: {
      control: false,
      description:
        'Called on valid password form submit. Providing this prop enables the built-in password-change feature.',
    },
    passwordError: {
      control: 'text',
      description: 'External error to display on the password form (e.g. API error).',
    },
    passwordSubmitting: {
      control: 'boolean',
      description: 'Disables form controls while the submission is in progress.',
    },
    passwordLabels: {
      control: false,
      description:
        'Override default labels for the password form (useful for i18n). Partial<PasswordFormLabels>.',
    },

    /* ---- className hooks ---- */
    className: {
      control: 'text',
      description: 'Applied to the outermost wrapper inside the drawer body.',
    },
    profileCardClassName: {
      control: 'text',
      description: 'Applied to the profile-card region (avatar + info).',
    },
    avatarClassName: { control: 'text', description: 'Applied to the avatar container.' },
    headerClassName: {
      control: 'text',
      description: 'Applied to the header row inside the drawer.',
    },
    bodyClassName: { control: 'text', description: 'Applied to the scrollable body container.' },
  },
} satisfies Meta<typeof ProfileDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

/* ------------------------------------------------------------------ */
/*  Shared helper: action row (mimics the app's ProfileActionRow)       */
/* ------------------------------------------------------------------ */

function ActionRow({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="luca-flex luca-h-10 luca-w-full luca-items-center luca-gap-2 luca-rounded-lg luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-py-2 luca-text-left luca-text-sm luca-font-normal luca-leading-5 luca-text-neutral-600 luca-transition hover:luca-bg-neutral-50 focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary"
    >
      {icon}
      <span className="luca-whitespace-nowrap">{label}</span>
    </button>
  );
}

/* document-text (heroicons v2, 24/outline) */
const DocIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6 luca-shrink-0 luca-text-neutral-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
);

const ListIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6 luca-shrink-0 luca-text-neutral-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
    />
  </svg>
);

/* arrow-left-end-on-rectangle (heroicons v2, 24/outline) */
const LogoutIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6 luca-shrink-0 luca-text-neutral-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
    />
  </svg>
);

const HelpIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6 luca-text-neutral-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Reusable sections for stories                                       */
/* ------------------------------------------------------------------ */

const actionsSection: ProfileDrawerSection = {
  key: 'actions',
  content: (
    <div className="luca-flex luca-flex-col luca-gap-4">
      <ActionRow icon={DocIcon} label="Política de privacidad" />
      <ActionRow icon={ListIcon} label="Términos y condiciones" />
    </div>
  ),
};

const helpSection: ProfileDrawerSection = {
  key: 'help',
  content: (
    <div className="luca-flex luca-h-12 luca-items-center luca-gap-2 luca-rounded-lg luca-bg-neutral-100 luca-px-4 luca-py-2 luca-text-base luca-leading-6">
      {HelpIcon}
      <div className="luca-flex luca-flex-wrap luca-items-center luca-gap-1 luca-text-neutral-600">
        <span className="luca-font-semibold luca-text-primary">¿Necesitas ayuda?</span>
        <span>Escríbenos por WhatsApp al</span>
        <a
          href="https://wa.me/525541691994"
          target="_blank"
          rel="noreferrer"
          className="luca-font-semibold luca-text-primary luca-underline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-primary"
        >
          +52 55 4169 1994.
        </a>
      </div>
    </div>
  ),
  className: '!luca-p-4',
};

const logoutSection: ProfileDrawerSection = {
  key: 'logout',
  content: <ActionRow icon={LogoutIcon} label="Cerrar sesión" />,
};

/* ------------------------------------------------------------------ */
/*  Teacher avatar source (used with avatarSrc convenience API)          */
/* ------------------------------------------------------------------ */

const TEACHER_AVATAR_URL = 'https://api.dicebear.com/9.x/avataaars/svg?seed=teacher';

const TeacherProfileInfo = (
  <div className="luca-flex luca-w-full luca-flex-col luca-items-center luca-justify-center luca-gap-1 luca-rounded-lg luca-p-2 luca-text-center luca-text-neutral-900">
    <p className="luca-text-xl luca-font-semibold luca-leading-8">Agustín Vega López</p>
    <p className="luca-text-lg luca-font-normal luca-leading-7">agustin.vega@independence.edu.mx</p>
    <p className="luca-text-lg luca-font-normal luca-leading-7">Independence School MX</p>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Student-like avatar (different style)                               */
/* ------------------------------------------------------------------ */

const StudentAvatar = (
  <div className="luca-h-[200px] luca-w-[200px] luca-flex luca-items-center luca-justify-center">
    <span className="luca-text-6xl">🧑‍🎓</span>
  </div>
);

const StudentProfileInfo = (
  <div className="luca-flex luca-w-full luca-flex-col luca-items-center luca-gap-2 luca-text-center luca-text-neutral-900">
    <div className="luca-flex luca-flex-col luca-items-center luca-gap-1 luca-p-2">
      <p className="luca-text-xl luca-font-semibold luca-leading-8">Roxana Barrios Cruz</p>
      <p className="luca-text-lg luca-font-normal luca-leading-7">roxana.barrios05@gmail.com</p>
    </div>
    {/* School + Classroom split row — matches Figma Subheader (node 2327:122773) */}
    <div className="luca-flex luca-w-full luca-gap-4 luca-rounded-lg luca-bg-neutral-50 luca-p-4">
      <div className="luca-flex luca-flex-1 luca-flex-col luca-gap-1 luca-text-left luca-text-base luca-leading-6 luca-text-neutral-900">
        <span className="luca-font-normal">Escuela</span>
        <span className="luca-font-semibold">Colegio Francés</span>
      </div>
      <div className="luca-h-auto luca-w-px luca-self-stretch luca-bg-neutral-200" />
      <div className="luca-flex luca-flex-1 luca-flex-col luca-gap-1 luca-text-left luca-text-base luca-leading-6 luca-text-neutral-900">
        <span className="luca-font-normal">Salón</span>
        <span className="luca-font-semibold">5° A</span>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Stories                                                            */
/* ------------------------------------------------------------------ */

/* Wrapper components avoid Storybook arg-serialization crashes with complex ReactNode props. */
const TeacherProfileDemo = () => {
  const [open, setOpen] = useState(false);

  const downloadSection: ProfileDrawerSection = {
    key: 'download',
    content: (
      <div className="luca-flex luca-flex-col luca-items-center luca-justify-center luca-gap-4 luca-text-center">
        <p className="luca-text-base luca-leading-6 luca-text-neutral-600">
          Descarga la app para programar lecciones y enseñar sin conexión.
        </p>
        <button className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]">
          Descargar App
        </button>
      </div>
    ),
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Teacher Profile
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mi cuenta"
        width={700}
        avatarSrc={TEACHER_AVATAR_URL}
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection, helpSection, downloadSection, logoutSection]}
        onPasswordSubmit={(data) => {
          console.log('Password submit:', data);
          setOpen(false);
        }}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

export const TeacherExample: Story = {
  render: () => <TeacherProfileDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Mi cuenta',
    width: 700,
  },
};

const StudentProfileDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Student Profile
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mi cuenta"
        width={700}
        avatar={StudentAvatar}
        profileInfo={StudentProfileInfo}
        sections={[actionsSection, helpSection, logoutSection]}
        onPasswordSubmit={(data) => {
          console.log('Password submit:', data);
          setOpen(false);
        }}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

export const StudentExample: Story = {
  render: () => <StudentProfileDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Mi cuenta',
    width: 700,
  },
};

const CustomContentDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Custom Profile
      </button>
      <ProfileDrawer open={open} onClose={() => setOpen(false)} title="Custom Profile" width={500}>
        <div className="luca-space-y-4">
          <div className="luca-rounded-2xl luca-bg-white luca-p-6 luca-text-center">
            <div className="luca-mx-auto luca-h-24 luca-w-24 luca-rounded-full luca-bg-accent-100 luca-flex luca-items-center luca-justify-center luca-text-4xl luca-mb-4">
              🎨
            </div>
            <h3 className="luca-text-lg luca-font-semibold">Design System User</h3>
            <p className="luca-text-neutral-500">Fully custom layout</p>
          </div>
          <div className="luca-rounded-2xl luca-bg-white luca-p-6">
            <p className="luca-text-neutral-600">
              This example uses <code>children</code> instead of the slot-based API to demonstrate
              full flexibility.
            </p>
          </div>
        </div>
      </ProfileDrawer>
    </>
  );
};

export const CustomContent: Story = {
  render: () => <CustomContentDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Custom Profile',
    width: 500,
  },
};

export const MinimalConfig: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
        >
          Open Minimal
        </button>
        <ProfileDrawer {...args} open={open} onClose={() => setOpen(false)} title="Profile">
          <div className="luca-rounded-2xl luca-bg-white luca-p-6">
            <p className="luca-text-neutral-600">
              Minimal ProfileDrawer — just title, close, and body content.
            </p>
          </div>
        </ProfileDrawer>
      </>
    );
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Profile',
  },
};

/* ------------------------------------------------------------------ */
/*  Avatar fallback demo                                               */
/* ------------------------------------------------------------------ */

const AvatarFallbackDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Avatar Fallback
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mi cuenta"
        width={700}
        avatarSrc="https://broken.invalid/does-not-exist.png"
        avatarAlt="Broken image demo"
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection, helpSection, logoutSection]}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

/** Demonstrates the user-icon fallback when `avatarSrc` fails to load. */
export const AvatarFallback: Story = {
  render: () => <AvatarFallbackDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Mi cuenta',
    width: 700,
  },
};

/* ------------------------------------------------------------------ */
/*  Password error + submitting state                                   */
/* ------------------------------------------------------------------ */

const PasswordErrorDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Password Error Demo
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Mi cuenta"
        avatarSrc={TEACHER_AVATAR_URL}
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection]}
        onPasswordSubmit={() => {}}
        passwordError="La contraseña actual es incorrecta"
        passwordSubmitting={false}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

/**
 * Demonstrates `passwordError` and `passwordSubmitting` props.
 * Click **Cambiar contraseña** to see the error message on the form.
 */
export const PasswordErrorState: Story = {
  render: () => <PasswordErrorDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Mi cuenta',
    width: 700,
  },
};

/* ------------------------------------------------------------------ */
/*  Custom labels (i18n)                                                */
/* ------------------------------------------------------------------ */

const CustomLabelsDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Custom Labels (EN)
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="My Account"
        avatarSrc={TEACHER_AVATAR_URL}
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection]}
        onPasswordSubmit={(data) => console.log('Password submit:', data)}
        passwordLabels={{
          action: 'Change password',
          title: 'Change password',
          currentPassword: 'Current password',
          newPassword: 'New password',
          confirmPassword: 'Confirm new password',
          cancel: 'Cancel',
          submit: 'Save',
          mismatchError: 'Passwords do not match',
          minLengthError: 'Password must be at least 6 characters',
          back: 'Back',
        }}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Version 2.1
          </p>
        }
      />
    </>
  );
};

/**
 * Demonstrates `passwordLabels` override for full i18n control.
 * All labels are English. Click **Change password** to see the translated form.
 */
export const CustomLabels: Story = {
  render: () => <CustomLabelsDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'My Account',
    width: 700,
  },
};

/* ------------------------------------------------------------------ */
/*  Header left element                                                 */
/* ------------------------------------------------------------------ */

const HeaderLeftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="luca-h-6 luca-w-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
  </svg>
);

const WithHeaderLeftDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open With Header Left
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Settings"
        headerLeft={
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="luca-rounded-full luca-p-1 luca-text-neutral-500 luca-transition hover:luca-bg-neutral-100 hover:luca-text-neutral-700"
            aria-label="Back"
          >
            {HeaderLeftArrow}
          </button>
        }
        avatarSrc={TEACHER_AVATAR_URL}
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection, helpSection]}
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

/**
 * Demonstrates `headerLeft` — a custom element rendered left of the title.
 * Here a back arrow button is placed next to the "Settings" title.
 */
export const WithHeaderLeft: Story = {
  render: () => <WithHeaderLeftDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Settings',
    width: 700,
  },
};

/* ------------------------------------------------------------------ */
/*  Detail panel (replaces main body)                                    */
/* ------------------------------------------------------------------ */

const WithDetailPanelDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="luca-px-4 luca-py-2 luca-bg-accent-600 luca-text-neutral-900 luca-rounded-xl luca-font-semibold luca-shadow-[0px_4px_0px_0px_#f58f00] hover:luca-bg-[#f5b02a]"
      >
        Open Detail Panel
      </button>
      <ProfileDrawer
        open={open}
        onClose={() => setOpen(false)}
        title="Notification Settings"
        avatarSrc={TEACHER_AVATAR_URL}
        profileInfo={TeacherProfileInfo}
        sections={[actionsSection]}
        detailPanel={
          <div className="luca-flex luca-flex-col luca-gap-4">
            <h3 className="luca-text-lg luca-font-semibold luca-text-neutral-900">
              Email Notifications
            </h3>
            <label className="luca-flex luca-items-center luca-justify-between luca-gap-2">
              <span className="luca-text-sm luca-text-neutral-700">Weekly digest</span>
              <input
                type="checkbox"
                defaultChecked
                className="luca-h-4 luca-w-4 luca-accent-primary"
              />
            </label>
            <label className="luca-flex luca-items-center luca-justify-between luca-gap-2">
              <span className="luca-text-sm luca-text-neutral-700">Assignment reminders</span>
              <input
                type="checkbox"
                defaultChecked
                className="luca-h-4 luca-w-4 luca-accent-primary"
              />
            </label>
            <label className="luca-flex luca-items-center luca-justify-between luca-gap-2">
              <span className="luca-text-sm luca-text-neutral-700">Marketing emails</span>
              <input type="checkbox" className="luca-h-4 luca-w-4 luca-accent-primary" />
            </label>
          </div>
        }
        footer={
          <p className="luca-text-center luca-text-xs luca-leading-4 luca-text-neutral-900">
            Versión 2.1
          </p>
        }
      />
    </>
  );
};

/**
 * Demonstrates `detailPanel` — arbitrary content that replaces the slot-based body.
 * Profile card, sections, and password flow are all hidden; only the panel renders.
 */
export const WithDetailPanel: Story = {
  render: () => <WithDetailPanelDemo />,
  args: {
    open: false,
    onClose: () => {},
    title: 'Notification Settings',
    width: 700,
  },
};
