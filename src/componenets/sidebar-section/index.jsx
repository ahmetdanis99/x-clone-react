import { Link } from "react-router-dom";
import PropTypes from "prop-types"

export default function SidebarSection({ title, children, more }) {
  return (
    <section className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)]">
      <h5 className="py-3 px-4 text-xl font-extrabold leading-6 items-center flex text-[color:var(--color-base)]">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="h-[3.25rem] flex items-center px-4 text-[color:var(--color-primary)] transition-colors hover:bg-white/[0.03]"
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}