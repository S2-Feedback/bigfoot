export function notify(verticalAlign, horizontalAlign, message, color, that) {
  that.$notify({
    timeout: 3000,
    message: message,
    icon: "add_alert",
    horizontalAlign: horizontalAlign,
    verticalAlign: verticalAlign,
    type: color
  });
}
