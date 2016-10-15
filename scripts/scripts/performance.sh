echo high > /sys/class/drm/card0/device/power_dpm_force_performance_level
echo performance > /sys/class/drm/card0/device/power_dpm_state
echo performance | tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor >/dev/null
