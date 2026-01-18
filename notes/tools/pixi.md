# Pixi

Pixi 是一个快速、现代且可重复的适用于所有背景开发者的包管理工具。（没错，又是用 Rust 写的，这下破案了）

## 安装

Windows

::: code-group

```sh [Scoop]
scoop install main/pixi
```

```ps1 [PowerShell]
powershell -ExecutionPolicy ByPass -c "irm -useb https://pixi.sh/install.ps1 | iex"
```

:::

Linux & MacOS

::: code-group

```sh [Homebrew]
brew install pixi
```

```sh [Curl]
curl -fsSL https://pixi.sh/install.sh | sh
```

:::

## ROS 2

```sh
pixi init my_ros2_project -c robostack-humble -c conda-forge
cd my_ros2_project
pixi add ros-humble-desktop ros-humble-turtlesim
pixi shell
ros2 run turtlesim turtlesim_node
```
