interface RowProps {
  iconUrl: string;
  name: string;
  count: number;
}

const RowItem: React.FC<RowProps> = ({ iconUrl, name, count }) => (
  <div className="flex items-center justify-between py-2">
    <div className="flex items-center gap-2">
      <img
        src={iconUrl}
        alt={`${name} icon`}
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-sm text-dark">{name}</span>
    </div>
    <span className="text-sm text-light">{count}</span>
  </div>
);

export default RowItem;
