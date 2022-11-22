import './index.css'

const TabItem = props => {
  const {eachTab, selectedTab, onChangingTabId} = props
  const {displayText, tabId} = eachTab

  const isSelected = selectedTab === tabId ? 'select-tab' : ''

  const onChangeTab = () => {
    onChangingTabId(tabId)
  }

  return (
    <li>
      <button
        className={`tab-head ${isSelected}`}
        type="button"
        onClick={onChangeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
