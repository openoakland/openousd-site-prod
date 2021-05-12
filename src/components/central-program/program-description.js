const Description = ({ percentOfTotal, data, content, formatValue }) => {
  const renderOptions = {
    renderMark: {
      [MARKS.BOLD]: text => {
        if (text === "**Percent of Total**") {
          return <strong>{percentOfTotal}%</strong>
        } else if (text === "**Change Descriptor**") {
          const changeDescriptor =
            data.change > 0
              ? content.increaseDescriptor
              : content.decreaseDescriptor
          return <strong>{changeDescriptor}</strong>
        } else {
          return <strong>{text}</strong>
        }
      },
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        return (
          <div className="change pb-2 pt-2">
            {data.change < 0 ? (
              <ArrowDropDown className="arrow" alt="down arrow" />
            ) : (
              <ArrowDropUp className="arrow" alt="up arrow" />
            )}{" "}
            {formatValue(Math.abs(data.change))}
          </div>
        )
      },
    },
  }
  return (
    <div className="description">
      <div className="">
        {documentToReactComponents(content.description, renderOptions)}
      </div>
    </div>
  )
}
