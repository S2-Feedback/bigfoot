export function notify (verticalAlign, horizontalAlign, message, color, that) {
    that.$notify({
      timeout: 2500,
      message:message,
      icon: "add_alert",
      horizontalAlign: horizontalAlign,
      verticalAlign: verticalAlign,
      type: color
    });
  }