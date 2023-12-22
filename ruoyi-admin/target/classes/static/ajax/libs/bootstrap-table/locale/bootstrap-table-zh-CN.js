/**
 * Bootstrap Table Chinese translation
 * Author: Zhixin Wen<wenzhixin2010@gmail.com>
 */
$.fn.bootstrapTable.locales['zh-CN'] = {
  formatShowSearch: function formatShowSearch() {
    return '隐藏/显示搜索';
  },
  formatPageGo: function formatPageGo() {
    return '跳转';
  },
  formatCopyRows: function formatCopyRows() {
    return '复制行';
  },
  formatPrint: function formatPrint() {
    return '打印';
  },
  formatLoadingMessage: function formatLoadingMessage() {
    return '正在努力地加载数据中，请稍候';
  },
  formatRecordsPerPage: function formatRecordsPerPage(pageNumber) {
    return "Every page shows ".concat(pageNumber, " Records");
  },
  formatShowingRows: function formatShowingRows(pageFrom, pageTo, totalRows, totalNotFiltered) {
    if (totalNotFiltered !== undefined && totalNotFiltered > 0 && totalNotFiltered > totalRows) {
      return "Show from ".concat(pageFrom, " to ").concat(pageTo, " Records，Totoally ").concat(totalRows, " Records（from ").concat(totalNotFiltered, " Filtered）");
    }
    return "Show from ".concat(pageFrom, " to ").concat(pageTo, " Records，Totally ").concat(totalRows, " Records");
  },
  formatSRPaginationPreText: function formatSRPaginationPreText() {
    return 'Last Page';
  },
  formatSRPaginationPageText: function formatSRPaginationPageText(page) {
    return "the".concat(page, "page");
  },
  formatSRPaginationNextText: function formatSRPaginationNextText() {
    return 'Next Page';
  },
  formatDetailPagination: function formatDetailPagination(totalRows) {
    return "Totally ".concat(totalRows, " Records");
  },
  formatClearSearch: function formatClearSearch() {
    return '清空过滤';
  },
  formatSearch: function formatSearch() {
    return '搜索';
  },
  formatNoMatches: function formatNoMatches() {
    return '没有找到匹配的记录';
  },
  formatPaginationSwitch: function formatPaginationSwitch() {
    return '隐藏/显示分页';
  },
  formatPaginationSwitchDown: function formatPaginationSwitchDown() {
    return '显示分页';
  },
  formatPaginationSwitchUp: function formatPaginationSwitchUp() {
    return '隐藏分页';
  },
  formatRefresh: function formatRefresh() {
    return '刷新';
  },
  formatToggle: function formatToggle() {
    return '切换';
  },
  formatToggleOn: function formatToggleOn() {
    return '显示卡片视图';
  },
  formatToggleOff: function formatToggleOff() {
    return '隐藏卡片视图';
  },
  formatColumns: function formatColumns() {
    return '列';
  },
  formatColumnsToggleAll: function formatColumnsToggleAll() {
    return '切换所有';
  },
  formatFullscreen: function formatFullscreen() {
    return '全屏';
  },
  formatAllRows: function formatAllRows() {
    return '所有';
  },
  formatAutoRefresh: function formatAutoRefresh() {
    return '自动刷新';
  },
  formatExport: function formatExport() {
    return '导出数据';
  },
  formatJumpTo: function formatJumpTo() {
    return '跳转';
  },
  formatAdvancedSearch: function formatAdvancedSearch() {
    return '高级搜索';
  },
  formatAdvancedCloseButton: function formatAdvancedCloseButton() {
    return '关闭';
  },
  formatFilterControlSwitch: function formatFilterControlSwitch() {
    return '隐藏/显示过滤控制';
  },
  formatFilterControlSwitchHide: function formatFilterControlSwitchHide() {
    return '隐藏过滤控制';
  },
  formatFilterControlSwitchShow: function formatFilterControlSwitchShow() {
    return '显示过滤控制';
  }
};
$.extend($.fn.bootstrapTable.defaults, $.fn.bootstrapTable.locales['zh-CN']);
